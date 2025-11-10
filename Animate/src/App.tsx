import { motion, useScroll } from "framer-motion";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <>
      <div className="w-full min-h-screen">

        <h1 className="text-white text-8xl m-4 min-h-30">MOTION WEBSITE</h1>
        <motion.div
          className="w-full h-1 origin-left rounded-full fixed top-0 left-0 bg-red-700  z-50"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>

        <div className="flex w-full ">
          <p className="text-white h-10 w-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            debitis quis veritatis? Quam est qui aut obcaecati mollitia,
            incidunt atque soluta laudantium totam adipisci doloremque
            perferendis amet reprehenderit vitae ipsa.
          </p>
          <motion.div
            id="box"
            initial={{
              scale: 0,
              x:"-10vw"
            }}
            animate={{
              x: "20vw",
              rotate: 360,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="p-0 overflow-hidden "
          >
            <img
              src="https://images.unsplash.com/photo-1762723813131-5b3c7c5f45f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
              alt=""
              className="h-80 w-auto object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          id="box2"
          drag
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          // whileTap={{scale:0.9}}
          whileDrag={{ scale: 1.2 }}
        ></motion.div>

        <motion.button
          id="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Click Me!
        </motion.button>

        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi
          maxime cupiditate, facilis porro quibusdam animi eaque ipsum fugiat
          repudiandae at ab aut amet? Ipsam consectetur corrupti voluptate, id
          doloribus non perferendis qui temporibus neque magnam, ut nam.
          Accusantium voluptate ad eveniet quae inventore, doloremque asperiores
          ipsum neque, fuga saepe maxime mollitia unde cupiditate dicta omnis
          soluta beatae repellat nam assumenda ducimus, veritatis illo totam ut.
          Magni harum consequatur, nulla, nemo, quo odit provident
          necessitatibus ipsum quidem repudiandae tempore temporibus. Eveniet
          vero, omnis fugiat, iste odio nulla dolorum magnam, cum labore
          voluptatem corrupti ut commodi vel ipsa minima inventore culpa? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. In ad id saepe
          sint quas et praesentium cumque dignissimos possimus minus dolorem
          magnam debitis nulla laborum porro aliquam, soluta deserunt amet eos.
          Eveniet autem minima saepe ipsa corrupti voluptate laboriosam
          accusamus velit a ab? Eligendi esse ad laboriosam, et qui quo totam
          sit incidunt debitis ipsam ex enim quod, veniam similique, quibusdam
          maiores minus. Adipisci voluptate rerum aliquam reprehenderit.
          Voluptas labore accusantium earum, amet sed quis velit reiciendis
          cumque neque ratione voluptatibus, perspiciatis quas, odit quasi ad
          ipsam laboriosam numquam. Sequi harum maxime aspernatur eos, laborum
          consequatur in eligendi soluta asperiores nulla voluptates! Sed iste
          illum ea, assumenda minima iure expedita qui labore possimus voluptas
          esse. Qui odio iusto reiciendis magnam labore est voluptatum, nam nisi
          earum quae tempore voluptas minima, natus facere quos doloribus harum
          voluptates eum ullam quasi. Alias deleniti provident officia vero
          magnam temporibus, iste quis quod saepe. Exercitationem distinctio
          perspiciatis eligendi, esse, delectus tenetur libero illo laborum hic
          quae sapiente ex dolorum, voluptatem at quod pariatur saepe quos cum
          dolorem? Enim error adipisci expedita, facilis doloribus optio,
          perferendis eveniet quos dolorem unde voluptates repellendus iusto
          saepe quae, ratione sunt delectus a eum esse nulla libero temporibus
          repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quo doloribus tempora pariatur odit nihil, delectus vel nesciunt
          numquam totam amet eum culpa temporibus magni voluptas dolorem
          dignissimos! Et, natus, architecto reprehenderit optio est, tenetur
          facilis ducimus quos reiciendis dolor quia ea autem quod officia
          obcaecati illum quaerat laborum maiores adipisci dicta! Quo illum
          quisquam id ex. Delectus obcaecati dolorum soluta. Cupiditate quisquam
          deserunt impedit recusandae, harum placeat fuga dignissimos quae
          consequuntur? Iusto similique laboriosam voluptate enim eaque nemo,
          aspernatur necessitatibus fugit corporis consectetur omnis esse
          repellat cum quibusdam fuga delectus voluptatem at doloremque! Laborum
          omnis quisquam aliquam recusandae est ullam in minus placeat magni
          culpa aliquid, exercitationem quaerat laboriosam ex voluptas hic nam?
          Sed excepturi, accusantium dolore optio placeat nesciunt quo commodi
          officiis reiciendis magni libero veritatis, id velit expedita. Velit,
          quas vitae ipsa commodi nam dolore animi, consequuntur fuga eos
          perferendis cum quidem nostrum voluptate incidunt cupiditate totam
          veniam nemo? Amet atque suscipit numquam optio aspernatur fugit ipsa
          modi nisi sit aliquid. Porro distinctio blanditiis, odio beatae rem
          sapiente fuga asperiores cupiditate incidunt consequatur repellat
          architecto dolorum quis illum vero nulla veniam ut earum commodi
          voluptatem qui corporis cum eligendi aliquam. Veritatis, eius
          doloremque? Odit, nulla inventore! Accusantium, pariatur earum modi
          veritatis consequatur culpa veniam, amet a atque ut facilis repellat
          praesentium, at voluptas ab quaerat repellendus asperiores ullam.
          Consequatur assumenda odio quaerat aspernatur praesentium natus
          placeat repellat, officia iure alias nesciunt fuga necessitatibus
          dolorum quas optio. Rem magnam earum, possimus ut minus eveniet
          aspernatur ea obcaecati sequi natus similique commodi necessitatibus
          hic placeat recusandae! Excepturi reiciendis quibusdam saepe, non est
          explicabo? Est consequatur quam, quod perferendis suscipit ipsa?
          Officiis sapiente est ad, impedit culpa ab incidunt iste voluptatum
          ducimus fugit nulla. Alias enim temporibus quaerat doloribus esse
          dolores eos laboriosam, omnis dicta aliquid voluptates nesciunt, quasi
          voluptate eum debitis at similique obcaecati ex in aliquam provident
          id. Accusamus excepturi aliquid libero similique voluptas quaerat odit
          voluptate ut minus debitis alias, praesentium pariatur suscipit
          impedit qui reprehenderit. Magnam nulla doloribus error autem unde ea
          quidem quisquam fugit suscipit dolore est itaque eaque molestiae esse
          exercitationem, corporis rem optio omnis perferendis impedit. Culpa
          reiciendis deleniti voluptatem commodi officiis quis odit incidunt in!
          Cupiditate distinctio esse ipsam sequi magni autem! Asperiores, alias!
          Non, consequatur, veritatis nemo facere soluta numquam deserunt optio
          quos repudiandae obcaecati perspiciatis? Ut fugiat reiciendis vitae
          dolor, veritatis ipsa officiis, similique id, est asperiores maiores
          labore modi repudiandae. Amet a optio maiores itaque unde mollitia
          iusto explicabo magni earum et aliquid minima assumenda pariatur totam
          officia ipsam ullam vel numquam labore obcaecati enim, aliquam ipsum
          culpa. Animi quia nesciunt mollitia fugit magni rem doloremque aliquam
          id nihil tempora? Voluptatem sed deleniti optio hic eius vitae
          repudiandae quidem velit illo, enim ipsam dolores reiciendis odio
          esse! Cumque reprehenderit exercitationem adipisci saepe ipsam
          temporibus quasi aspernatur quidem nobis! Consequatur repudiandae
          saepe neque voluptatum modi repellat molestias velit. Laboriosam quo
          atque similique fugiat minus! Adipisci aliquam harum, incidunt tempore
          pariatur dicta. Odit aut ea autem sit aspernatur ab repellat est
          ipsam.
        </div>
      </div>
    </>
  );
}

export default App;
