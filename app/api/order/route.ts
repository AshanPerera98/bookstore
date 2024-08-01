import { NextRequest, NextResponse } from "next/server";

const errorState = false;

export const POST = async (reqest: NextRequest) => {
  const { items, address, bank } = await reqest.json();

  //   Handle db put ------------------------------

  console.log({ items });
  console.log({ address });
  console.log({ bank });

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Artificial delay

  //   Responding ---------------------------------

  if (errorState) {
    return NextResponse.json("Internal server error", { status: 500 });
  }

  if (!items || !address || !bank) {
    return NextResponse.json("Bad request", { status: 400 });
  }

  return NextResponse.json("Order placed success", { status: 200 });
};
