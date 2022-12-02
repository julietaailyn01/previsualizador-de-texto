
function Previewer({text,open}){


    return (
      <div className="bg-gray-600 rounded-md w-full h-80">
         <div id="preview" className={open ? 'open' : 'close'} dangerouslySetInnerHTML= {{
        __html: text}}> 
        </div>
      </div>
      )
  }

export default Previewer;