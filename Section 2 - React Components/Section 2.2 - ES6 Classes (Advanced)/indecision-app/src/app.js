//JavaScript Variables:
const app = {
   title: 'Indecision App',
   subtitle: 'Put you life in the hands of a computer',
   options: []
};

// Form event handler functions:
const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;

   if(option) {
      app.options.push(option);  //pushes the value to our options array above.
      e.target.elements.option.value = '';

      render();
   }
};

const removeAll = () => {
   app.options = [];
   render();
};

const makeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const selectedOption = app.options[randomNum]
   console.log(selectedOption);
};

const appRoot = document.getElementById('app');

// Render Application:
const render = () => {
   //JSX Expression:
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
         <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
         <button onClick={removeAll}>Remove All</button>
         <ol>
            {
               app.options.map( (option) => <li key={option}>{option}</li>)
            }
         </ol>
         <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
         </form>
      </div>
   );

   ReactDOM.render(template, appRoot);
};

render();


//--------------------------------
// Challenge:
//--------------------------------



//--------------------------------
// Answer:
//--------------------------------
