import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inp, setInp] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect triggers only when searchTerm is updated by clicking the button
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setData(null);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if (!response.ok) {
          throw new Error(`Word not found`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="flex h-fit w-screen min-h-[100vh] flex-col items-center justify-center bg-violet-600 px-4">
      <div className="main bg-white w-full min-h-[70vh] max-w-4xl rounded-2xl shadow-lg flex flex-col items-center overflow-auto m-5 scrollbar-hide">

      
        {/* Header */}
        <div className="h-fit p-8 w-full bg-linear-to-r from-blue-500 to-blue-400 text-white flex flex-col items-center justify-center mb-6 ">
          <h1 className="text-4xl font-bold">LexiLookup</h1>
          <h2 className="text-md mt-2">Discover the meaning of any English word</h2>
        </div>

        <div className='m-[2rem]'>
          {/* Input */}
          <div className="flex w-full gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter a word"
              className="flex-1 w-[25vw] border border-gray-300 rounded-md px-4 py-2"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />                              
            <button
              className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
              onClick={() => setSearchTerm(inp)}
            >
              Search
            </button>
          </div>
          
          {/* Loader & Error */}
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {/* Result */}
          {data && (
            <div className="w-full text-left">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">{data[0].word}</h2>

                {data[0].phonetics.find(p => p.audio) && (
                  <button
                    onClick={() => {
                      const audioUrl = data[0].phonetics.find(p => p.audio)?.audio;
                      if (audioUrl) {
                        new Audio(audioUrl).play();
                      }
                    }}
                    className="text-violet-600 text-4xl hover:text-violet-800"
                    title="Play pronunciation"
                  >
                    🔊
                  </button>
                )}
              </div>
              {data[0].phonetics.find(p => p.text) && (
                <p className="text-gray-500 italic mb-4">
                  {data[0].phonetics.find(p => p.text)?.text}
                </p>
              )}

              {data[0].meanings.map((meaning, index) => (
                <div key={index} className="mb-4 w-[95%] border-l-4 border-blue-500 pl-4 pt-4 pb-4 rounded-2xl shadow-sm">
                  <p className="text-2xl font-bold text-blue-400">{meaning.partOfSpeech.toUpperCase()}</p>
                  <ol className="list-decimal list-inside pl-4  text-gray-800 ">
                    {meaning.definitions.map((def, idx) => (
                      <div className="mb-4 text-[118%] flex flex-col " key={idx}>
                        <div className='flex gap-x-3'>
                          <p className='font-bold'>{idx+1}.</p>
                          <h3>{def.definition}</h3>
                        </div>
                        {def.example && (
                          <div className="text-[90%] italic text-gray-600 mt-1 ml-4 shadow-sm rounded-2xl w-[90%]">
                            <span className="font-medium">Example:</span> {def.example}
                          </div>
                        )}
                      </div>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  </div>

  );
}

export default App;
