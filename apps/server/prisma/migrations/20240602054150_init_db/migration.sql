-- CreateTable
CREATE TABLE "system_users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "nick_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT,
    "email" TEXT,
    "first_name" TEXT,
    "middle_name" TEXT,
    "last_name" TEXT,
    "avatar_url" TEXT,
    "gender" TEXT,
    "contry" TEXT,
    "province" TEXT,
    "city" TEXT,
    "address" TEXT,
    "biography" TEXT,
    "website" TEXT,
    "profile" TEXT,
    "birth_date" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "auth_flag" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,

    CONSTRAINT "system_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_user_auth" (
    "id" SERIAL NOT NULL,
    "provider" TEXT NOT NULL,
    "open_id" TEXT,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_in" INTEGER,
    "metadata" JSON,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "system_user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "type" TEXT,
    "status" TEXT,
    "priority" TEXT,
    "expired_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,
    "user_id" INTEGER,
    "parentId" INTEGER,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sort_value" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" TIMESTAMP(3),
    "updated_by" INTEGER,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags_on_tasks" (
    "tag_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,

    CONSTRAINT "tags_on_tasks_pkey" PRIMARY KEY ("tag_id","task_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "system_users_username_key" ON "system_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "system_users_phone_number_key" ON "system_users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "system_users_email_key" ON "system_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "system_user_auth_provider_open_id_key" ON "system_user_auth"("provider", "open_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_title_key" ON "tags"("title");

-- AddForeignKey
ALTER TABLE "system_user_auth" ADD CONSTRAINT "system_user_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "system_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "system_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "system_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_tasks" ADD CONSTRAINT "tags_on_tasks_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_tasks" ADD CONSTRAINT "tags_on_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
