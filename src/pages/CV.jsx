export default function PDFViewer() {
  return (
    <div id="cv" className="bg-gradient-to-t from-gray-950 to-indigo-950 z-99 text-white justify-center items-center flex min-h-screen">
      <div className="w-1/2 h-1/2 max-w-4xl aspect-[8.5/11] shadow-xl rounded-xl overflow-hidden m-0 p-0">
        <iframe
          src="/cv.pdf#toolbar=0"
          className="w-full h-3/4"
          frameBorder="0"
          title="PDF Document"
        />
      </div>
    </div>
  );
}
