import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
describe("SwiftPay Protocol", () => {
  it("should initialize the NFT engine", () => {
    const { result } = simnet.callPublicFn("swift-pay-nft", "set-engine", [Cl.principal(`${deployer}.swift-pay`)], deployer);
    expect(result).toBeOk(Cl.bool(true));
  });
});
