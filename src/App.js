import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react';
import marked from 'marked';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [input, setInput] = useState(placeholder)

  const markdownOutput = {__html:marked(input)}

  

  const handleChange = (e) =>{

    setInput(e.target.value)
  }


  return (
    <div className="App container mt-5">
      <div className="mb-3 container">
        <label htmlFor="editor" className="form-label">Markdown Input</label>
        <textarea 
        className="form-control" 
        id=" editor" 
        rows="3"
        onChange={handleChange}
        defaultValue={placeholder}
        />
      </div>
      <div className="mb-3 container">
        <h3>Markdown Output</h3>
        <div 
        dangerouslySetInnerHTML = {{__html: marked(input)}}
        id="preview"
        />

      </div>
    </div>
  );
}

export default App;
