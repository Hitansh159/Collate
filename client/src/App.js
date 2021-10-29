import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="card shadow-xl image-full h-1/2 w-1/3">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" className="h-3 w-2" />
      </figure>
      <div class="justify-end card-body">
        <h2 class="card-title">Image overlay</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
        <div class="card-actions">
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

  );
}

export default App;
