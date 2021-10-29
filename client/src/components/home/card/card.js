function Card({ title, description, tags }) {

    return (
        <div class="card lg:card-side bordered w-30p min-h-1/6 shadow-lg m-5" >
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p class="my-5">{description}</p>

                <div>
                    {tags.map((tag) => (
                        <div class="badge badge-success m-1 border-primary bg-secondary-focus">
                            {tag}
                        </div>
                    ))}

                </div>
                <div class="card-actions ">
                    <button class="btn btn-primary">More info</button>
                </div>
            </div>
        </div>
    );
}

export default Card;