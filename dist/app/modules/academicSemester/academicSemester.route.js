"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = express_1.default.Router();
router.post("/create-academic-semester", (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidation.createAcademicSemesterValidationSchema), academicSemester_controller_1.academicSemesterController.createAcademicSemester);
router.get("/", academicSemester_controller_1.academicSemesterController.getAllAcademicSemester);
router.get("/:semesterId", academicSemester_controller_1.academicSemesterController.findSingleSemesterById);
router.patch("/:semesterId", (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidation.createAcademicSemesterValidationSchema), academicSemester_controller_1.academicSemesterController.updateSemesterById);
exports.academicSemesterRouter = router;
