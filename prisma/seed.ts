import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clearDb = async () => {
  console.log("Clearing the Database...");
  await prisma.listing.deleteMany();
  await prisma.agent.deleteMany();
};

const seed = async () => {
  console.log("Seeding the Database...");
  await clearDb();

  /* Create Agents */
  const ryanMitchell = await prisma.agent.create({
    data: {
      name: "Ryan Mitchell",
      phoneNumber: "(555)-888-9900",
    },
  });

  const kimberlyBrown = await prisma.agent.create({
    data: {
      name: "Kimberly Brown",
      phoneNumber: "(555)-999-0011",
    },
  });

  const jasonClark = await prisma.agent.create({
    data: {
      name: "Jason Clark",
      phoneNumber: "(555)-010-1122",
    },
  });

  /* Create Listings */
  const listing1 = await prisma.listing.create({
    data: {
      id: 11122334,
      streetAddress: "7621 Lakewood Blvd",
      town: "Auburndale",
      zipcode: 33823,
      price: 380000,
      bedrooms: 4,
      bathrooms: 2.5,
      sqFootageInFt: 2100,
      lotSizeInAcres: 0.27,
      yearBuilt: 2016,
      type: "Single Family Home",
      description:
        "Lovely two-story home with spacious bedrooms, a modern kitchen, and a large backyard. Located in a peaceful neighborhood.",
      elementarySchool: "Auburndale Central Elementary",
      highSchool: "Auburndale High",
      middleSchool: "Stambaugh Middle",
      agentId: ryanMitchell.id,
    },
  });

  const listing2 = await prisma.listing.create({
    data: {
      id: 22233445,
      streetAddress: "3459 Sunset Ln",
      town: "Auburndale",
      zipcode: 33823,
      price: 420000,
      bedrooms: 5,
      bathrooms: 3,
      sqFootageInFt: 2750,
      lotSizeInAcres: 0.35,
      yearBuilt: 2020,
      type: "Single Family Home",
      description:
        "Beautiful home featuring high ceilings, a large kitchen island, and a covered lanai. Ideal for entertaining guests.",
      elementarySchool: "Lena Vista Elementary",
      highSchool: "Auburndale High",
      middleSchool: "Stambaugh High",
      agentId: kimberlyBrown.id,
    },
  });

  const listing3 = await prisma.listing.create({
    data: {
      id: 33344556,
      streetAddress: "8923 Cypress Ln",
      town: "Auburndale",
      zipcode: 33823,
      price: 335000,
      bedrooms: 3,
      bathrooms: 2,
      sqFootageInFt: 1800,
      lotSizeInAcres: 0.22,
      yearBuilt: 2014,
      type: "Single Family Home",
      description:
        "Well-maintained home with a split bedroom floor plan, granite countertops, and a fenced backyard.",
      elementarySchool: "Caldwell Elementary",
      highSchool: "Auburndale High",
      middleSchool: "Stambaugh Middle",
      agentId: jasonClark.id,
    },
  });

  const listing4 = await prisma.listing.create({
    data: {
      id: 44455667,
      streetAddress: "4567 Heritage Dr",
      town: "Auburndale",
      zipcode: 33823,
      price: 395000,
      bedrooms: 4,
      bathrooms: 2.5,
      sqFootageInFt: 2200,
      lotSizeInAcres: 0.28,
      yearBuilt: 2017,
      type: "Single Family Home",
      description:
        "Spacious home with a large open living area, upgraded appliances, and a screened-in-porch.",
      elementarySchool: "Auburndale Central Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: ryanMitchell.id,
    },
  });

  const listing5 = await prisma.listing.create({
    data: {
      id: 55566778,
      streetAddress: "2390 Evergreen Dr",
      town: "Auburndale",
      zipcode: 33823,
      price: 410000,
      bedrooms: 4,
      bathrooms: 3,
      sqFootageInFt: 2300,
      lotSizeInAcres: 0.32,
      yearBuilt: 2018,
      type: "Single Family Home",
      description:
        "Contemporary home with energy-efficient features, a large kitchen, and a private pool.",
      elementarySchool: "Lena Vista Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: kimberlyBrown.id,
    },
  });

  const listing6 = await prisma.listing.create({
    data: {
      id: 66677889,
      streetAddress: "6734 Willow Crest Ct",
      town: "Auburndale",
      zipcode: 33823,
      price: 325000,
      bedrooms: 3,
      bathrooms: 2,
      sqFootageInFt: 1750,
      lotSizeInAcres: 0.2,
      yearBuilt: 2012,
      type: "Single Family Home",
      description:
        "Charming home with a cozy living area, updated kitchen, and a beautifully landscaped yard.",
      elementarySchool: "Caldwell Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: jasonClark.id,
    },
  });

  const listing7 = await prisma.listing.create({
    data: {
      id: 77788990,
      streetAddress: "9856 Oakwood Dr",
      town: "Auburndale",
      zipcode: 33823,
      price: 340000,
      bedrooms: 3,
      bathrooms: 2,
      sqFootageInFt: 1850,
      lotSizeInAcres: 0.25,
      yearBuilt: 2015,
      type: "Single Family Home",
      description:
        "Well-kept home with an open floor plan, hardwood floors, and a screened lanai. Great location close to shopping and dining.",
      elementarySchool: "Auburndale Central Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: ryanMitchell.id,
    },
  });

  const listing8 = await prisma.listing.create({
    data: {
      id: 88899001,
      streetAddress: "7410 Palm Tree Dr",
      town: "Auburndale",
      zipcode: 33823,
      price: 370000,
      bedrooms: 4,
      bathrooms: 2,
      sqFootageInFt: 2050,
      lotSizeInAcres: 0.3,
      yearBuilt: 2016,
      type: "Single Family Home",
      description:
        "Modern home with a spacious family room, updated kitchen, and a large backyard. Perfect for a growing family.",
      elementarySchool: "Lena Vista Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: kimberlyBrown.id,
    },
  });

  const listing9 = await prisma.listing.create({
    data: {
      id: 99900112,
      streetAddress: "5823 Lakeview Ln",
      town: "Auburndale",
      zipcode: 33823,
      price: 450000,
      bedrooms: 4,
      bathrooms: 3.5,
      sqFootageInFt: 2600,
      lotSizeInAcres: 0.45,
      yearBuilt: 2019,
      type: "Single Family Home",
      description:
        "Stunning lakefront property with breathtaking views, a large deck, and a spacious master suite.",
      elementarySchool: "Caldwell Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: jasonClark.id,
    },
  });

  const listing10 = await prisma.listing.create({
    data: {
      id: 10011223,
      streetAddress: "1402 Pine Ridge Cir",
      town: "Auburndale",
      zipcode: 33823,
      price: 310000,
      bedrooms: 3,
      bathrooms: 2,
      sqFootageInFt: 1700,
      lotSizeInAcres: 0.22,
      yearBuilt: 2010,
      type: "Single Family Home",
      description:
        "Move-in ready home with a split bedroom plan, modern kitchen, and a large patio. Located in a friendly neighborhood.",
      elementarySchool: "Auburndale Central Elementary",
      middleSchool: "Stambaugh Middle",
      highSchool: "Auburndale High",
      agentId: ryanMitchell.id,
    },
  });
};

seed()
  .then(() => {
    console.log("Seeding Complete");
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
