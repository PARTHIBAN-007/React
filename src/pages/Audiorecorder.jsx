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
