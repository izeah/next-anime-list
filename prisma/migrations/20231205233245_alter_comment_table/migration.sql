/*
  Warnings:

  - You are about to alter the column `anime_mal_id` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Comment` MODIFY `anime_mal_id` INTEGER NOT NULL;
