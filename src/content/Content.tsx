import './Content.css'

function Content() {
    return (
        <div className='item-0 Content'>
            <h2>Welcome!</h2>

            <p>
                Welcome to my personal page.
                Here you will find information about me and my work but 
                especially informations about the projects I have worked 
                on aswell as information about the research I have performed.
                I have planned to include some kind of blog here but this is up to my future self to actually do it ;-)!
            </p>

            <p>
                Read more about:
            </p>

            <ul>
                <li>
                    <a href='#aboutMe'>Me</a>
                </li>
                <li>
                    <a href='#research'>My Research</a>
                </li>
                <li>
                    <a href='#projects'>My Projects</a>
                </li>
                <li>
                    <a href='#competitions'>Competitions</a>
                </li>
            </ul>

            <h3 id='aboutMe'>About Me</h3>

            <p> 
                I am a master student of Informatics at the University of Stuttgart.
                Previously, I completed my bachelor's degree in Informatics at the 
                Baden-Wuerttemberg Cooperative State University (also known as Duale 
                Hochschule Baden-Wuerttemberg (DHBW) in german) in cooperation with 
                diconium digital solutions GmbH where I worked in various departements 
                as a software developer/student researcher.
            </p>

            <p>
                I my free time you will either find me coocking or likely bouldering.
            </p>

            <h3 id='research'>Research</h3>

            <p>
                Some of my research has remained confidential as I have perfomed it while in idustry 
                where I focused on recommender systems and did my bachelor's thesis in the area of 
                DevSecOps.
                In the future I plan on doing more public research.
                You can check out <a href='https://scholar.google.com/citations?user=YRaLLK0AAAAJ&hl=de'>
                Google Scholar</a> in case I forgot to update this page.
                My most noteable public research work has been in the field of automatic theorem proving.
            </p>

            <h4>Paper: Efficient Implementation of Large-Scale Watchlists</h4>

            <p>
                In this paper I worked on the <a href='http://wwwlehre.dhbw-stuttgart.de/~sschulz/E/E.html'>E theorem prover</a> where
                I tried to improve the performance of prover with regards to the finding of subsumption candidates 
                in the special case of unit clauses.
                The paper was published in the proceedings of the Seventh Workshop on Practical Aspects of Automated Reasoning 
                which is associated with 
                the 10th International Joint Conference on Automated Reasoning (IJCAR-2020).
                You can find a full text version <a href='http://ceur-ws.org/Vol-2752/paper9.pdf'>here</a> and the accompanying 
                source code <a href='https://github.com/ConstantinRuhdorfer/eprover'>here</a>.
                I have included the abstract below:
            </p>

            <p className='Quote'>
                In this work, we explore techniques for improving the performance of the automated theorem proving system E when dealing with large watchlists. A watchlist can focus the proof search towards so-called hints, likely useful intermediate results provided externally. Recently, hints have been automatically extracted from previous proofs, creating massive watchlists and thus making evaluation of new clauses against the wachtlist a performance bottleneck. We introduce a new index for the frequent special case of unit clause hints, taking advantage of the fact that subsumption can be implemented much more efficiently for unit clauses than for the general case. We implement several strategies for exploiting the structure and properties of equational unit clauses. Additionally, we have added a new soft subsumption mechanism to E that can abstract away differences of constant or Skolem symbols, effectively allowing a less precise match when evaluating a given clause against the watchlist. We have tested the new mechanisms on a large set of problems taken from the Mizar 40 project, using a large watchlist containing over 300 000 clauses. We show that the usage of the unit clause index significantly increases performance with this given watchlist. The use of soft subsumption shows more mixed results. We believe that most watchlists can take advantage of these techniques and have made them available to the user via E’s command line interface.
            </p>

            <h3 id='projects'>Projects</h3>

            <p>
                The following includes a list of projects I worked on.
                Notice that this list is of course not comprehensive.
                For an overview of my opensource projects please visit my GitHub profile (link in the menu on the left).
                Some of the projects I worked on include:
            </p>

            <ul>
                <li>
                    <a href='#workProjects'>Work projects</a>
                </li>
                <li>
                    <a href='#E'>Index data strcutes in the E theorem prover</a>
                </li>
                <li>
                    <a href='#MotionPlanner'>Motion planner for a driverless racecar</a>
                </li>
                <li>
                    <a href='#NN'>Feed forward neural network</a>
                </li>
                <li>
                    <a href='#GSD2AML'>GSD2AML-Converter</a>
                </li>
                <li>
                    <a href='#webpage'>This very page</a>
                </li>
                <li>
                    <a href='#other'>Other</a>
                </li>
            </ul>

            <h4 id='workProjects'>Work projects</h4>

            I have worked as at least part time software engineer since late 2017.
            Many of the projects I did there are not open source but I can share some brief descriptions of a selection of them:

            <ul>
                <li>Dashboard for overseeing room capacity: Used Angular, Typescript, HTML5 and SCSS.</li>
                <li>React native app: Used Typescript, JSX and Azure-Face-Api for the app and developed the backend in Python3.</li>
                <li>Recommendation system: Used Python3, TensorFlow, NumPy, Pandas, HyperOpt, Flask and Docker.</li>
                <li>Recommendation system in the big data context: Used Scala, Apache Kafka, Apache HBase and Spark streaming.</li>
                <li>Recommendation system using the lambda architecture: Used PySpark, NumPy, Pandas and Cassandra.</li>
            </ul>

            <h4 id='E'>Index data strcutes in the E theorem prover</h4>
            
            As descriped in the <a href='#research'>research section</a> I worked on the E theorem prover.
            The prover is mainly written in C while some accompanying tools are written in Python/Bash etc.
            My contributions are <a href='https://github.com/ConstantinRuhdorfer/eprover'>open source</a>.  

            <h4 id='MotionPlanner'>Motion planner for a driverless racecar</h4>

            <p>
                As part of DHBW Engineering I took part in working on a driverless racecar in the context 
                of the formula student design and construction competition.
                I was part of the team that dealt with motion planning.
                Learn more about DHBW Engineering, the car and the competion on 
                the <a href='https://www.dhbw-engineering.de/'>website of the team</a>.
            </p>

            <p>
                My responsibilities included:
            </p>

            <ol>
                <li>Understand relevant literature and algorithms</li>
                <li>Implement algorithms with Python 3, Numpy, Pandas, and SciPy from relevant papers</li>
                <li>Design custom made algorithms and data structures for pathfinding and more</li>
            </ol>

            <p>
                Sadly the project is not open source. 
                I continue to support DHBW Engineering as an alumnus.
            </p>
            
            <h4 id='NN'>Feed forward neural network</h4>

            <p>
                I have implemented a small C++ feed forward neural network using backpropagation 
                written with the Eigen3 library.
                While the network of course does not achieve new best results in benchmarks or similiar I have implemented
                this project purely out of curiosity and as a learning activity.
                The project is <a href='https://github.com/ConstantinRuhdorfer/Feed-Forward-Neural-Network'>open source</a>.
            </p>
            
            <h4 id='GSD2AML'>GSD2AML-Converter</h4>

            <p>
                Together with a team of other students (check the README on the project page on <a href='https://github.com/TINF17C/GSD2AML-Converter'>GitHub</a>)
                we implemented a converter from ProfiNet GSD files to an AMLX package using the AML.Engine.
            </p>
            
            <p>
                The project includes the library for doing the conversion, a GUI and a CLI and is written in C#.
                We published the project as a package to <a href='https://www.nuget.org/packages/Gsd2Aml.Lib'>NuGet</a>.
            </p>
            
            <h4 id='webpage'>This very page</h4>

            <p>
                I have build this (admittedly simple) page with ReactJS, TypeScript, HTML5 and CSS.
                The page is deployed to DigitalOcean using its GitHub integration.
                You can find the source code for this project on <a href='https://github.com/ConstantinRuhdorfer/ruhdorfer.me'>GitHub</a>.
            </p>

            <h4 id='other'>Other</h4>

            <p>Other things I had fun doing are:</p>

            <ul>
                <li>
                    Trying some problems of the advent of code event in <a href='https://github.com/ConstantinRuhdorfer/Haskell-Advent-of-Code'>Haskell</a>.
                </li>
                <li>
                    Implementing graph algorithms in <a href='https://github.com/ConstantinRuhdorfer/haskell-GraphLib'>Haskell</a> and <a href='https://github.com/ConstantinRuhdorfer/ReasonML-GraphLib'>ReasonML</a>
                </li>
            </ul>

            <h3 id='competitions'>Competitions</h3>
            
            <p>Some competitions I took part in:</p>

            <ol>
                <li>First place in the DHBW summer school coding competition in italy (2018).</li>
                <li>Top 500 in the <a href='https://challenge.openai.com/'>OpenAI Codex challange</a> (2021).</li>
            </ol>

        </div>
    )
}

export default Content;