function Edit({text,setText}){
    return (
      <div id="edit" className=" py-3">
        <textarea id="editor" value={text} onChange={(e)=>setText(e.target.value)} className="full p-2 rounded-md w-full bg-teal-100 text-black justify-between h-40 ">
        </textarea>
      </div>
    )
  }

export default Edit

