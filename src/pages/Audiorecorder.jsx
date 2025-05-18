import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsPaused(false);
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  const deleteRecording = () => {
    setAudioURL(null);
    audioChunksRef.current = [];
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Audio Recorder</h1>
      <div className="space-x-2 mb-4">
        {!isRecording && (
          <button
            onClick={startRecording}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start Recording
          </button>
        )}
        {isRecording && !isPaused && (
          <>
            <button
              onClick={pauseRecording}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Hold Recording
            </button>
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Stop Recording
            </button>
          </>
        )}
        {isRecording && isPaused && (
          <>
            <button
              onClick={resumeRecording}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Resume Recording
            </button>
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Stop Recording
            </button>
            
              
            
          </>
        )}
      </div>

      {audioURL && (
        <div className="space-y-2">
          <audio controls src={audioURL} className="w-full" />
          <button
            onClick={deleteRecording}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Delete Recording
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;


// import React, { useState, useRef } from 'react';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mediaRecorder = new MediaRecorder(stream);
//       mediaRecorderRef.current = mediaRecorder;
//       audioChunksRef.current = [];

//       mediaRecorder.ondataavailable = event => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
//         const url = URL.createObjectURL(audioBlob);
//         setAudioURL(url);
//       };

//       mediaRecorder.start();
//       setIsRecording(true);
//       setIsPaused(false);
//     } catch (err) {
//       console.error('Failed to start recording:', err);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//       setIsPaused(false);
//     }
//   };

//   const pauseRecording = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
//       mediaRecorderRef.current.pause();
//       setIsPaused(true);
//     }
//   };

//   const resumeRecording = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
//       mediaRecorderRef.current.resume();
//       setIsPaused(false);
//     }
//   };

//   const deleteRecording = () => {
//     setAudioURL(null);
//     audioChunksRef.current = [];
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto text-center">
//       <h1 className="text-xl font-bold mb-4">Audio Recorder</h1>
//       <div className="space-x-2 mb-4">
//         {!isRecording && (
//           <button
//             onClick={startRecording}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Start Recording
//           </button>
//         )}
//         {isRecording && !isPaused && (
//           <>
//             <button
//               onClick={pauseRecording}
//               className="bg-yellow-500 text-white px-4 py-2 rounded"
//             >
//               Hold Recording
//             </button>
//             <button
//               onClick={stopRecording}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Stop Recording
//             </button>
//           </>
//         )}
//         {isRecording && isPaused && (
//           <>
//             <button
//               onClick={resumeRecording}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Resume Recording
//             </button>
//             <button
//               onClick={stopRecording}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Stop Recording
//             </button>
//           </>
//         )}
//       </div>

//       {audioURL && (
//         <div className="space-y-2">
//           <audio controls src={audioURL} className="w-full" />
//           <button
//             onClick={deleteRecording}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Delete Recording
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;


// import React, { useState, useRef } from 'react';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mediaRecorder = new MediaRecorder(stream);
//       mediaRecorderRef.current = mediaRecorder;
//       audioChunksRef.current = [];

//       mediaRecorder.ondataavailable = event => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
//         const url = URL.createObjectURL(audioBlob);
//         setAudioURL(url);
//       };

//       mediaRecorder.start();
//       setIsRecording(true);
//     } catch (err) {
//       console.error('Failed to start recording:', err);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   const deleteRecording = () => {
//     setAudioURL(null);
//     audioChunksRef.current = [];
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto text-center">
//       <h1 className="text-xl font-bold mb-4">Audio Recorder</h1>
//       <div className="space-x-2 mb-4">
//         {!isRecording && (
//           <button
//             onClick={startRecording}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Start Recording
//           </button>
//         )}
//         {isRecording && (
//           <button
//             onClick={stopRecording}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Stop Recording
//           </button>
//         )}
//       </div>

//       {audioURL && (
//         <div className="space-y-2">
//           <audio controls src={audioURL} className="w-full" />
//           <button
//             onClick={deleteRecording}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Delete Recording
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioRecorder;




import React, { useState, useRef } from "react";

const AudioRecorder = ({ onBlobReady }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setAudioURL(URL.createObjectURL(audioBlob));
      onBlobReady(audioBlob); // Send blob to parent
    };

    mediaRecorder.start();
    setIsRecording(true);
    setIsPaused(false);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current?.state === "paused") {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  const deleteRecording = () => {
    setAudioURL(null);
    audioChunksRef.current = [];
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Audio Recorder</h1>
      <div className="space-x-2 mb-4">
        {!isRecording && (
          <button onClick={startRecording} className="bg-green-500 text-white px-4 py-2 rounded">
            Start Recording
          </button>
        )}
        {isRecording && !isPaused && (
          <>
            <button onClick={pauseRecording} className="bg-yellow-500 text-white px-4 py-2 rounded">
              Pause
            </button>
            <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded">
              Stop
            </button>
          </>
        )}
        {isRecording && isPaused && (
          <>
            <button onClick={resumeRecording} className="bg-blue-500 text-white px-4 py-2 rounded">
              Resume
            </button>
            <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded">
              Stop
            </button>
          </>
        )}
      </div>

      {audioURL && (
        <div className="space-y-2">
          <audio controls src={audioURL} className="w-full" />
          <button onClick={deleteRecording} className="bg-gray-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;




import React, { useRef } from "react";
import axios from "axios";
import AudioRecorder from "./AudioRecorder";

const ParentComponent = () => {
  const blobRef = useRef(null);

  const handleBlob = (blob) => {
    blobRef.current = blob;
  };

  const uploadRecording = async () => {
    if (!blobRef.current) return;

    const formData = new FormData();
    formData.append("file", blobRef.current, "recording.webm");

    try {
      const res = await axios.post("http://localhost:8000/upload-audio", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload success:", res.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="p-4 text-center">
      <AudioRecorder onBlobReady={handleBlob} />
      <button
        onClick={uploadRecording}
        className="bg-purple-600 text-white px-4 py-2 rounded mt-4"
      >
        Upload Audio
      </button>
    </div>
  );
};

export default ParentComponent;



from fastapi import FastAPI, UploadFile, File
import shutil
import os

app = FastAPI()

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    os.makedirs("uploaded_audios", exist_ok=True)
    file_path = f"uploaded_audios/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"message": "Audio uploaded", "filename": file.filename}
