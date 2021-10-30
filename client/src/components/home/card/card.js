function Card({ title, description, tags }) {

    return (
        <div class="card lg:card-side bordered w-30p min-h-1/6 shadow-lg m-5 bg-base-100 " >
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p class="my-5">{description}</p>

                <div>
                    {tags.map((tag) => (
                        <div class="badge badge-secondary badge-outline m-1">
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