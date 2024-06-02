-- AlterTable
ALTER TABLE "tags_on_tasks" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" INTEGER;
