import { useHistory } from 'react-router-dom';

function Card({ title, description, tags, rid, from }) {

    const history = useHistory();
    console.log("d id: ", rid)

    return (
        <div class="card lg:card-side bordered w-30p min-h-1/6 shadow-lg m-5 bg-base-100 text-serif" >
            <div class="card-body">
                <h2 class="text-3xl text-primary-content">{title}</h2>
                <p class="my-5 text-primary-content">{description}</p>

                <div>
                    {tags.map((tag) => (
                        <div className="badge badge-success m-1 text-base dark:bg-base-200 dark:text-gray-400">
                            {tag}
                        </div>
                    ))}

                </div>
                <div class="card-actions ">
                    <button class="btn btn-primary" onClick={() => {
                        
                        if (from == 'dashboard')
                            history.push('/editor', { id: rid });
                        else
                            history.push(`/resource/${rid}`);
                    }}>More info</button>
                </div>
            </div>
        </div>
    );
}

export default Card;