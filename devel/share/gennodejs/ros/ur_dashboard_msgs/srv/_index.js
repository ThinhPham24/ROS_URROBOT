
"use strict";

let GetLoadedProgram = require('./GetLoadedProgram.js')
let GetRobotMode = require('./GetRobotMode.js')
let Popup = require('./Popup.js')
let IsProgramSaved = require('./IsProgramSaved.js')
let AddToLog = require('./AddToLog.js')
let RawRequest = require('./RawRequest.js')
let Load = require('./Load.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let GetProgramState = require('./GetProgramState.js')

module.exports = {
  GetLoadedProgram: GetLoadedProgram,
  GetRobotMode: GetRobotMode,
  Popup: Popup,
  IsProgramSaved: IsProgramSaved,
  AddToLog: AddToLog,
  RawRequest: RawRequest,
  Load: Load,
  IsInRemoteControl: IsInRemoteControl,
  GetSafetyMode: GetSafetyMode,
  IsProgramRunning: IsProgramRunning,
  GetProgramState: GetProgramState,
};
