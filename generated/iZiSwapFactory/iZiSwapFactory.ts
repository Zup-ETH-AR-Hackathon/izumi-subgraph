// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewPool extends ethereum.Event {
  get params(): NewPool__Params {
    return new NewPool__Params(this);
  }
}

export class NewPool__Params {
  _event: NewPool;

  constructor(event: NewPool) {
    this._event = event;
  }

  get tokenX(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get pointDelta(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get pool(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class iZiSwapFactory extends ethereum.SmartContract {
  static bind(address: Address): iZiSwapFactory {
    return new iZiSwapFactory("iZiSwapFactory", address);
  }

  chargeReceiver(): Address {
    let result = super.call("chargeReceiver", "chargeReceiver():(address)", []);

    return result[0].toAddress();
  }

  try_chargeReceiver(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "chargeReceiver",
      "chargeReceiver():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee2pointDelta(param0: i32): i32 {
    let result = super.call(
      "fee2pointDelta",
      "fee2pointDelta(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );

    return result[0].toI32();
  }

  try_fee2pointDelta(param0: i32): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "fee2pointDelta",
      "fee2pointDelta(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  flashModule(): Address {
    let result = super.call("flashModule", "flashModule():(address)", []);

    return result[0].toAddress();
  }

  try_flashModule(): ethereum.CallResult<Address> {
    let result = super.tryCall("flashModule", "flashModule():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  limitOrderModule(): Address {
    let result = super.call(
      "limitOrderModule",
      "limitOrderModule():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_limitOrderModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "limitOrderModule",
      "limitOrderModule():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  liquidityModule(): Address {
    let result = super.call(
      "liquidityModule",
      "liquidityModule():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_liquidityModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "liquidityModule",
      "liquidityModule():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newPool(
    tokenX: Address,
    tokenY: Address,
    fee: i32,
    currentPoint: i32
  ): Address {
    let result = super.call(
      "newPool",
      "newPool(address,address,uint24,int24):(address)",
      [
        ethereum.Value.fromAddress(tokenX),
        ethereum.Value.fromAddress(tokenY),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromI32(currentPoint)
      ]
    );

    return result[0].toAddress();
  }

  try_newPool(
    tokenX: Address,
    tokenY: Address,
    fee: i32,
    currentPoint: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newPool",
      "newPool(address,address,uint24,int24):(address)",
      [
        ethereum.Value.fromAddress(tokenX),
        ethereum.Value.fromAddress(tokenY),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromI32(currentPoint)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  only_addr_(): Address {
    let result = super.call("only_addr_", "only_addr_():(address)", []);

    return result[0].toAddress();
  }

  try_only_addr_(): ethereum.CallResult<Address> {
    let result = super.tryCall("only_addr_", "only_addr_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pool(param0: Address, param1: Address, param2: i32): Address {
    let result = super.call("pool", "pool(address,address,uint24):(address)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2))
    ]);

    return result[0].toAddress();
  }

  try_pool(
    param0: Address,
    param1: Address,
    param2: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pool",
      "pool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapX2YModule(): Address {
    let result = super.call("swapX2YModule", "swapX2YModule():(address)", []);

    return result[0].toAddress();
  }

  try_swapX2YModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "swapX2YModule",
      "swapX2YModule():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapY2XModule(): Address {
    let result = super.call("swapY2XModule", "swapY2XModule():(address)", []);

    return result[0].toAddress();
  }

  try_swapY2XModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "swapY2XModule",
      "swapY2XModule():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _chargeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _swapX2YModule(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _swapY2XModule(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _liquidityModule(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _limitOrderModule(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _flashModule(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class EnableFeeAmountCall extends ethereum.Call {
  get inputs(): EnableFeeAmountCall__Inputs {
    return new EnableFeeAmountCall__Inputs(this);
  }

  get outputs(): EnableFeeAmountCall__Outputs {
    return new EnableFeeAmountCall__Outputs(this);
  }
}

export class EnableFeeAmountCall__Inputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }

  get fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get pointDelta(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class EnableFeeAmountCall__Outputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }
}

export class ModifyChargeReceiverCall extends ethereum.Call {
  get inputs(): ModifyChargeReceiverCall__Inputs {
    return new ModifyChargeReceiverCall__Inputs(this);
  }

  get outputs(): ModifyChargeReceiverCall__Outputs {
    return new ModifyChargeReceiverCall__Outputs(this);
  }
}

export class ModifyChargeReceiverCall__Inputs {
  _call: ModifyChargeReceiverCall;

  constructor(call: ModifyChargeReceiverCall) {
    this._call = call;
  }

  get _chargeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ModifyChargeReceiverCall__Outputs {
  _call: ModifyChargeReceiverCall;

  constructor(call: ModifyChargeReceiverCall) {
    this._call = call;
  }
}

export class NewPoolCall extends ethereum.Call {
  get inputs(): NewPoolCall__Inputs {
    return new NewPoolCall__Inputs(this);
  }

  get outputs(): NewPoolCall__Outputs {
    return new NewPoolCall__Outputs(this);
  }
}

export class NewPoolCall__Inputs {
  _call: NewPoolCall;

  constructor(call: NewPoolCall) {
    this._call = call;
  }

  get tokenX(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get currentPoint(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class NewPoolCall__Outputs {
  _call: NewPoolCall;

  constructor(call: NewPoolCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
