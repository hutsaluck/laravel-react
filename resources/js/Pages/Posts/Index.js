export default function PostsIndex() {
    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">
                <table className="table">
                    <thead className="table-header">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Created at</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>A</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto aspernatur
                            blanditiis consectetur, distinctio dolorem dolores doloribus dolorum ea error et expedita
                            hic illo ipsam itaque iusto maiores maxime minima molestias mollitia nesciunt odit pariatur
                            quibusdam quo, sequi sint totam ut veritatis voluptas? Harum nemo perspiciatis quas vero?
                            Asperiores?
                        </td>
                        <td>20-06-2022</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>B</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequatur distinctio
                            dolores doloribus enim eos explicabo incidunt iure laborum, nulla odit quidem quo ut vel
                            vero vitae voluptatem! Adipisci aliquam, aut corporis deserunt dolorem ea exercitationem hic
                            iste libero maxime necessitatibus neque officia porro provident recusandae unde velit
                            veniam.
                        </td>
                        <td>20-06-2022</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>C</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet delectus dolorum, enim
                            facere iure libero mollitia numquam, optio quas quasi quidem ut vitae. Accusamus earum,
                            error exercitationem ipsa itaque magni pariatur quae, quasi sapiente sequi totam vel
                            voluptas voluptate. Ab dignissimos eligendi mollitia officia, perspiciatis praesentium quas
                            sapiente tempore!
                        </td>
                        <td>20-06-2022</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
