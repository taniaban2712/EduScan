import React from "react";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <p className="text-wrapper">Sign in to your account</p>
            <div className="group">
              <div className="div">
                <Rectangle className="rectangle-3" />
                <div className="text-wrapper-2">Student</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Teacher</div>
              </div>
            </div>
            <div className="new-to-eduscan">
              New to EduScan? <br />
              SignUp
            </div>
          </div>
          <div className="group-2">
            <div className="smart-attendance-for">
              Smart <br />
              Attendance
              <br />
              for Smarter Education
            </div>
            <img
              className="es-removebg-preview"
              alt="Es removebg preview"
              src="https://c.animaapp.com/rdhv4rwW/img/es-removebg-preview-1@2x.png"
            />
            <div className="text-wrapper-4">EduScan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
