import React, { useEffect } from "react";
import faceIO from '@faceio/fiojs'

const FaceDetectionFIO = () => {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa94c7");
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "1234",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
          Enrollment Date: ${response.timestamp}
          Gender: ${response.details.gender}
          Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
              PayLoad: ${JSON.stringify(response.payload)}
              `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section>
  );
};

export default FaceDetectionFIO;
