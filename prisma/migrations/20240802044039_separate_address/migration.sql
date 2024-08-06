/*
  Warnings:

  - You are about to drop the column `address` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `streetAddress` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `town` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "streetAddress" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "sqFootageInFt" INTEGER NOT NULL,
    "lotSizeInAcres" INTEGER NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "elementarySchool" TEXT NOT NULL,
    "middleSchool" TEXT NOT NULL,
    "highSchool" TEXT NOT NULL,
    "agentId" INTEGER NOT NULL,
    CONSTRAINT "Listing_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Listing" ("agentId", "bathrooms", "bedrooms", "description", "elementarySchool", "highSchool", "id", "lotSizeInAcres", "middleSchool", "price", "sqFootageInFt", "type", "yearBuilt") SELECT "agentId", "bathrooms", "bedrooms", "description", "elementarySchool", "highSchool", "id", "lotSizeInAcres", "middleSchool", "price", "sqFootageInFt", "type", "yearBuilt" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
CREATE UNIQUE INDEX "Listing_streetAddress_key" ON "Listing"("streetAddress");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
