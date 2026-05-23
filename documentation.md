# API Documentation (Payscribe Landingpage)

This document describes all API routes used by the app (public + admin), their purpose, auth requirements, and the UI integration points.

## Conventions

- **Responses**: Most endpoints return JSON with an `ok` boolean on success.
- **Errors**: Errors generally return JSON `{ "error": string, "details"?: any }` with an appropriate HTTP status code.
- **Admin auth**: Admin endpoints require a valid `ps_admin_token` **httpOnly cookie** (JWT).
- **MongoDB collections**:
  - `admins`
  - `posts`
  - `contact_submissions`
  - `press_posts`

---

## Environment variables

These are required for the backend features to function:

- **`MONGO_URI`**: MongoDB connection string
- **`JWT_SECRET`**: Secret used to sign/verify admin JWT cookies
- **`X_AUTH_ADMIN_KEY`**: Bootstrap key used by admin login (optional flow)
- **Cloudinary** (image upload/delete):
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

---

## Admin Authentication APIs

### `POST /api/admin/auth/login`
- **Purpose**: Log in as admin; sets `ps_admin_token` cookie.
- **Auth**: None (this is how you obtain auth).
- **Body**:
  - `{ email: string, password: string }`
  - (Also supports bootstrap flow via `X_AUTH_ADMIN_KEY` header depending on server logic.)
- **Success**: `{ ok: true }`

**Used by**
- UI: `src/app/admin/login/page.tsx`
- Client helper: `src/app/admin/_api/auth.ts` → `login()`

### `GET /api/admin/auth/me`
- **Purpose**: Validate current admin session (cookie).
- **Auth**: Requires valid cookie.
- **Success**: `{ ok: true, admin?: { email?: string } }`

**Used by**
- Guard: `src/app/admin/_components/adminAuth.ts` (via axios helper)
- Client helper: `src/app/admin/_api/auth.ts` → `me()`

### `POST /api/admin/auth/logout`
- **Purpose**: Clear admin session cookie.
- **Auth**: Usually called while authed.
- **Success**: `{ ok: true }`

**Used by**
- UI shell: `src/app/admin/_components/AdminShell.tsx`
- Client helper: `src/app/admin/_api/auth.ts` → `logout()`

---

## Admin Dashboard API

### `GET /api/admin/dashboard`
- **Purpose**: Admin dashboard summary in one request.
- **Auth**: Required.
- **Success**:
  - `{ ok: true, stats: { published: number, drafts: number, newContacts: number }, recentPosts: any[], recentContacts: any[] }`

**Used by**
- Hook: `src/app/admin/_hooks/useAdminDashboard.ts`
- Client helper: `src/app/admin/_api/dashboard.ts` → `getDashboard()`
- Page: `src/app/admin/page.tsx`

---

## Admin Blog APIs

### `GET /api/admin/blog?page=<n>&pageSize=<n>`
- **Purpose**: Paginated list of blog posts for admin.
- **Auth**: Required.
- **Success**:
  - `{ ok: true, page, pageSize, total, posts: BlogPostRow[] }`

### `POST /api/admin/blog`
- **Purpose**: Create a blog post.
- **Auth**: Required.
- **Body** (JSON):
  - `title` (string)
  - `slug` (string, unique)
  - `excerpt` (string)
  - `category` ("Company" | "Product" | "Finance" | "API")
  - `status` ("draft" | "published")
  - `contentHtml` (string)
  - `coverImageUrl` (string | null)
  - `coverImagePublicId` (string | null)
- **Success**: `{ ok: true, id: string }`

**Used by**
- Client helper: `src/app/admin/_api/blog.ts`
  - `listBlog()`, `createPost()`
- Pages:
  - `src/app/admin/blog/page.tsx` (via hook)
  - `src/app/admin/blog/new/page.tsx`

### `GET /api/admin/blog/[id]`
- **Purpose**: Fetch a single post (admin).
- **Auth**: Required.
- **Success**: `{ ok: true, post: {...} }`

### `PATCH /api/admin/blog/[id]`
- **Purpose**: Update post fields.
- **Auth**: Required.
- **Body**: Partial of create payload (server validates).
- **Success**: `{ ok: true }`

### `DELETE /api/admin/blog/[id]`
- **Purpose**: Delete a post.
- **Auth**: Required.
- **Behavior**: Best-effort deletes `coverImagePublicId` from Cloudinary, then removes post from Mongo.
- **Success**: `{ ok: true }`

**Used by**
- Client helper: `src/app/admin/_api/blog.ts`
  - `getPost()`, `updatePost()`, `deletePost()`
- Pages:
  - `src/app/admin/blog/[id]/edit/page.tsx`
  - `src/app/admin/blog/page.tsx` (delete from list)

### `POST /api/admin/blog/[id]/publish`
- **Purpose**: Set status to `published`.
- **Auth**: Required.
- **Success**: `{ ok: true }`

### `POST /api/admin/blog/[id]/unpublish`
- **Purpose**: Set status to `draft`.
- **Auth**: Required.
- **Success**: `{ ok: true }`

**Used by**
- Client helper: `src/app/admin/_api/blog.ts` → `publishPost()`, `unpublishPost()`
- Hook: `src/app/admin/_hooks/useAdminBlogList.ts`

---

## Admin Contact Submission APIs

### `GET /api/admin/contact`
- **Purpose**: List recent contact submissions for admin review.
- **Auth**: Required.
- **Success**: `{ ok: true, submissions: ContactSubmission[] }`

### `GET /api/admin/contact/[id]`
- **Purpose**: Read a single contact submission.
- **Auth**: Required.
- **Success**: `{ ok: true, submission: {...} }`

### `PATCH /api/admin/contact/[id]`
- **Purpose**: Update status (and optionally note).
- **Auth**: Required.
- **Body**: `{ status?: "new" | "in_progress" | "resolved", note?: string }`
- **Success**: `{ ok: true }`

**Used by**
- Client helper: `src/app/admin/_api/contact.ts`
- Hook: `src/app/admin/_hooks/useAdminContactSubmissions.ts`
- Page: `src/app/admin/contact/page.tsx`

---

## Admin Press APIs (CRUD + auto-seed)

### `GET /api/admin/press`
- **Purpose**: List press items.
- **Auth**: Required.
- **Auto-seed behavior**: If `press_posts` is empty, seeds from `src/app/press/_components/pressData.ts` (URLs are trimmed).
- **Success**: `{ ok: true, items: PressItem[] }`

### `POST /api/admin/press`
- **Purpose**: Create press item (external link).
- **Auth**: Required.
- **Body**:
  - `title`, `date`, `readTime`, `summary`, `thumbnail?`, `url`
- **Success**: `{ ok: true, id: string }`

### `GET /api/admin/press/[id]`
- **Purpose**: Read press item.
- **Auth**: Required.
- **Success**: `{ ok: true, item: PressItem }`

### `PATCH /api/admin/press/[id]`
- **Purpose**: Update press item.
- **Auth**: Required.
- **Success**: `{ ok: true }`

### `DELETE /api/admin/press/[id]`
- **Purpose**: Delete press item.
- **Auth**: Required.
- **Success**: `{ ok: true }`

**Used by**
- Client helper: `src/app/admin/_api/press.ts`
- Hooks:
  - `src/app/admin/_hooks/useAdminPressList.ts`
  - `src/app/admin/_hooks/useAdminPressCreate.ts`
  - `src/app/admin/_hooks/useAdminPressEdit.ts`
- Pages:
  - `src/app/admin/press/page.tsx`
  - `src/app/admin/press/new/page.tsx`
  - `src/app/admin/press/[id]/edit/page.tsx`

---

## Admin Image Upload APIs (Cloudinary)

### `POST /api/admin/upload/image`
- **Purpose**: Upload an image to Cloudinary.
- **Auth**: Required.
- **Body**: `multipart/form-data` with `file`
- **Success**: `{ ok: true, url: string, publicId: string }`

### `POST /api/admin/upload/image/delete`
- **Purpose**: Delete a Cloudinary image by `publicId`.
- **Auth**: Required.
- **Body**: `{ publicId: string }`
- **Success**: `{ ok: true }`

**Used by**
- Client helper: `src/app/admin/_api/upload.ts`
- Blog pages:
  - `src/app/admin/blog/new/page.tsx` (cover upload on save)
  - `src/app/admin/blog/[id]/edit/page.tsx` (delete old cover then upload new)

---

## Public APIs

### `POST /api/contact`
- **Purpose**: Public contact form submission.
- **Auth**: None.
- **Body**: `{ fullName, email, reason, description }`
- **Success**: `{ ok: true }`

### `GET /api/press`
- **Purpose**: Public press feed (drives `/press`).
- **Auth**: None.
- **Success**: `{ ok: true, items: PressItem[] }` (may be empty)

**Used by**
- Server helper: `src/app/press/_api/press.ts` (axios)
- Page: `src/app/press/page.tsx`

### `GET /api/blog`
- **Purpose**: Public list of published blog posts.
- **Auth**: None.
- **Success**: `{ ok: true, posts: PublicBlogPost[] }`

### `GET /api/blog/[slug]`
- **Purpose**: Public blog post detail by slug (published only).
- **Auth**: None.
- **Success**: `{ ok: true, post: PublicBlogPost }`

**Used by**
- Server helper: `src/app/blog/_api/blog.ts` (axios)
- Pages:
  - `src/app/blog/page.tsx`
  - `src/app/blog/[slug]/page.tsx`

---

## Client integration structure (where API code lives)

### Admin
- Axios client: `src/app/admin/_api/client.ts` (`adminApi`)
- Endpoint wrappers: `src/app/admin/_api/*.ts`
- UI hooks: `src/app/admin/_hooks/*.ts`
- Pages: `src/app/admin/**/page.tsx` should mostly render UI and call hooks.

### Public (Press/Blog)
- Press server helper: `src/app/press/_api/press.ts`
- Blog server helper: `src/app/blog/_api/blog.ts`
