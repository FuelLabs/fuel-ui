#!/bin/sh

ROOT_DIR=$(realpath ../)
ESCROW_CONTRACT=$ROOT_DIR/contracts/escrow
# TODO fix test in escrow contract if it is broken
TOKEN_CONTRACT=$ROOT_DIR/contracts/asset

echo $ESCROW_CONTRACT
echo $TOKEN_CONTRACT

echo "Build Fuel Escrow contract"
forc build -p $ESCROW_CONTRACT
echo "Build Token contract"
forc build -p $TOKEN_CONTRACT
echo "Build Types for contracts"
npx typechain --target fuels --out-dir=./src/systems/Core/types/contracts '../contracts/**/out/debug/**.json'
echo "Prettify code"
npx prettier --write src/systems/Core/types
