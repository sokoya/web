"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
	LogOutIcon,
	NewspaperIcon,
	LayoutDashboardIcon,
	InboxIcon,
	MegaphoneIcon,
	User2Icon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroDropFromTop } from "@/lib/animations";
import {
	clearAdminEmail,
	setAdminAuthed,
	useAdminEmail,
	useAdminGuard,
} from "./adminAuth";
import { logout as apiLogout } from "../_api/auth";
import logo from "@/assets/images/logo-white.png";

const nav = [
	{ href: "/admin", label: "Dashboard", icon: LayoutDashboardIcon },
	{ href: "/admin/blog", label: "Blog", icon: NewspaperIcon },
	{ href: "/admin/press", label: "Press", icon: MegaphoneIcon },
	{ href: "/admin/contact", label: "Contact Submissions", icon: InboxIcon },
] as const;

function NavItem({
	href,
	label,
	active,
	icon: Icon,
}: {
	href: string;
	label: string;
	active: boolean;
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Link
			href={href}
			className={[
				"group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
				active
					? "bg-primary/20 text-white shadow-[0_8px_24px_rgba(33,77,192,0.28)]"
					: "text-slate-300 hover:bg-white/5 hover:text-white",
			].join(" ")}
		>
			<Icon
				className={[
					"h-4 w-4",
					active ? "text-primary" : "text-slate-400 group-hover:text-white",
				].join(" ")}
			/>
			<span className='font-medium'>{label}</span>
		</Link>
	);
}

export function AdminShell({
	children,
	title,
	subtitle,
	actions,
}: {
	children: React.ReactNode;
	title: string;
	subtitle?: string;
	actions?: React.ReactNode;
}) {
	const prefersReducedMotion = useReducedMotion();
	const reducedMotion = !!prefersReducedMotion;
	const pathname = usePathname();
	const router = useRouter();
	const { ready } = useAdminGuard();
	const adminEmail = useAdminEmail();

	async function logout() {
		setAdminAuthed(false);
		clearAdminEmail();
		await apiLogout().catch(() => {});
		router.replace("/admin/login");
	}

	return (
		<div className='min-h-screen bg-background text-secondary'>
			<div className='min-h-screen'>
				<aside className='fixed inset-y-0 left-0 hidden w-[290px] border-r border-white/10 bg-secondary text-white lg:block'>
					<div className='flex h-full flex-col overflow-hidden'>
						<div className='px-6 pt-6'>
							<div className='gap-3'>
								<Image
									src={logo}
									alt='Payscribe'
									className='w-[100px] object-contain'
									priority
								/>
								<div className='min-w-0'>
									<p className='truncate text-sm font-semibold leading-tight text-white'>
										Admin Portal
									</p>
									<p className='truncate text-xs text-slate-400'>
										Manage blog & submissions
									</p>
								</div>
							</div>
						</div>

						<div className='mt-6 flex-1 overflow-y-auto px-4 pb-6'>
							<div className='rounded-2xl bg-white/5 p-2'>
								{nav.map((item) => {
									const active =
										pathname === item.href ||
										(item.href !== "/admin" && pathname.startsWith(item.href));
									return (
										<NavItem
											key={item.href}
											href={item.href}
											label={item.label}
											icon={item.icon}
											active={active}
										/>
									);
								})}
							</div>
						</div>

						<div className='shrink-0 border-t border-white/10 px-4 py-5'>
							<div className='rounded-2xl bg-white/5 p-3'>
								<div className='flex items-center gap-3'>
									<div className='grid h-9 w-9 place-items-center rounded-xl bg-white/10'>
										<User2Icon className='h-4 w-4 text-slate-200' />
									</div>
									<div className='min-w-0'>
										<p className='truncate text-xs font-semibold text-slate-200'>
											{adminEmail || "admin"}
										</p>
										<p className='text-[11px] text-slate-400'>Admin</p>
									</div>
								</div>
								<button
									type='button'
									onClick={logout}
									className='mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:opacity-95'
								>
									<LogOutIcon className='h-4 w-4' />
									Logout
								</button>
							</div>
						</div>
					</div>
				</aside>

				<main className='min-w-0 lg:pl-[290px]'>
					<motion.header
						{...heroDropFromTop({ reduced: reducedMotion, delay: 0.02 })}
						className='sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur'
					>
						<div className='mx-auto w-full max-w-6xl px-5 py-4'>
							<div className='flex flex-wrap items-start justify-between gap-4'>
								<div className='min-w-0'>
									<p className='text-[11px] font-semibold uppercase tracking-wide text-slate-400'>
										Admin
									</p>
									<h1 className='mt-1 truncate text-2xl font-semibold text-secondary'>
										{title}
									</h1>
									{subtitle ? (
										<p className='mt-1 text-sm text-slate-500'>{subtitle}</p>
									) : null}
								</div>
								<div className='flex items-center gap-3'>
									{actions ? actions : null}
									<div className='hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 sm:flex'>
										<span className='h-2 w-2 rounded-full bg-primary' />
										<span className='truncate'>{adminEmail || "admin"}</span>
									</div>
								</div>
							</div>
						</div>
					</motion.header>

					<div className='mx-auto w-full max-w-6xl px-5 py-6'>
						{!ready ? (
							<div className='rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm'>
								Loading…
							</div>
						) : (
							children
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
