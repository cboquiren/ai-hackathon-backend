/*
  Warnings:

  - You are about to alter the column `bathrooms` on the `Listing` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `lotSizeInAcres` on the `Listing` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

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
    "bathrooms" REAL NOT NULL,
    "sqFootageInFt" INTEGER NOT NULL,
    "lotSizeInAcres" REAL NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "elementarySchool" TEXT NOT NULL,
    "middleSchool" TEXT NOT NULL,
    "highSchool" TEXT NOT NULL,
    "agentId" INTEGER NOT NULL,
    CONSTRAINT "Listing_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Listing" ("agentId", "bathrooms", "bedrooms", "description", "elementarySchool", "highSchool", "id", "lotSizeInAcres", "middleSchool", "price", "sqFootageInFt", "streetAddress", "town", "type", "yearBuilt", "zipcode") SELECT "agentId", "bathrooms", "bedrooms", "description", "elementarySchool", "highSchool", "id", "lotSizeInAcres", "middleSchool", "price", "sqFootageInFt", "streetAddress", "town", "type", "yearBuilt", "zipcode" FROM "Listing";
DROP TABLE "Listing";
ALTER TABLE "new_Listing" RENAME TO "Listing";
CREATE UNIQUE INDEX "Listing_streetAddress_key" ON "Listing"("streetAddress");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
