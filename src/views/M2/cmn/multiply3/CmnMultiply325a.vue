<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>25.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《宣教士：艾得理》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
<h2>艾得理 (David Howard Adeney) 1911 ~ 1994</h2>

<p class="forward">艾得理（David Howard Adeney），英国中华内地会宣教士，一生致力于中国以及东南亚等地的校园布道与学生工作。有&ldquo;学生之光&rdquo;之美誉。</p>

<p class="forward">艾得理於1911 年生于英国贝德福郡（Bedfordshire）一个敬虔的基督徒家庭，父亲是牧师，早年去罗马尼亚做宣教士，服务于伦敦犹太人会社（London Jews&rsquo; Society），向犹太人传福音。母亲是富家之女，信仰虔诚。她不仅支持自己的丈夫，与他一起来往奔波，她也希望自己的孩子们都能够成为宣教士。夫妇俩共养育了四个儿子，艾得理是长子。年少时，家人时常不能生活在一起，他与父亲住在罗马尼亚的首都布加勒斯特，而母亲和他的三个弟弟住在英格兰，后来兄弟四人果然成全了母亲的心愿，个个都成了宣教士。艾得理到中国宣教，三弟后来也步其后尘到中国；二弟去非洲行医传道；四弟则继承父志到巴勒斯坦向犹太人传福音。</p>

<p class="forward">艾得理在教会寄宿学校读书时，受戴德生和&ldquo; 剑桥七杰 &rdquo; 传记的影响，立志到当时贫穷落后的中国去传福音。当高中毕业时，他已确信上帝呼召他去中国宣教。1930 年入读剑桥大学后不久，他成为剑桥基督徒团契的核心同工，负责宣教部的事工。大学四年级时，他更成为全英校园福音团契执行委员会委员，仍然负责宣教部门的工作，扩大成立全国性的学生宣教团契，以&ldquo; 遍传福音，候王再临 &rdquo; （Evangelize to a finish, to bring back the King）的口号相号召，推动学生海外宣教 运动。艾得理从剑桥大学神学院毕业后，又到伦敦内地会培训学校接受海外宣教装备一年。之后就作为内地会的宣教士，踏上前往中国的程途。此后他一生的事奉，就跟中国人紧紧地联系在一起了。</p>

<p class="forward">1934年9月，艾得理乘船启程前往中国，途中度过了他23岁生日。经过五个多星期的航行抵达上海，旋即转往安徽安庆，在内地会所为宣教士所办的语言学校学习中文，半年后即被派往河南乡村传道。1936年，艾得理开始常住方城县宣教，发展并牧养信徒。1938年春天，艾得理在方城与来自美国的内地会宣教士德忠玉（Ruth Temple）结婚。</p>

<p class="forward">德忠玉生于美国明尼苏达州，父亲是敬虔、爱主的长老。她自小在农场中长大，身体强健。当她與艾得理初相遇時才22歲。1937年夏天，他们在河南鸡公山宣教士休假中心再次会面，当时大家都在为艾得理祷告，求主为他预备一个合适的妻子。德忠玉后来回忆说：&ldquo; 我当时一点都没有想到那会是我。&rdquo;因为她并不认为自己适合做他的妻子，甚至不愿意顺从神的带领。直到有一天在听讲道时，台上那位传道人在毫不知情下，指着她的鼻子说：&ldquo; 神在预备你成为別人的妻子。&rdquo;这时，她才降服了。后来她多次与人分享說：&ldquo;蒙召嫁给艾得理和蒙召到中国，一样清晰。&rdquo;1938年3月，他們在河南方城结婚，然后到鸡公山度蜜月。婚后，她跟随艾得理到方城教会一起同工，负责妇女工作。在方城事奉期间，他们生了一个女 儿。因他俩一个来自美国，一个来自英国，故给女儿取名&ldquo;美英&rdquo;。美英长大后也做了宣教士，到菲律宾去宣教。艾得理夫妇一共养育了5个孩子，有3个出生在中国，可惜其中一个不幸夭亡。在他们婚后4 6年的共同生活中，德忠玉热心接待并帮助了上千位学生。</p>

<p class="forward">1941年，艾得理全家离开河南前往美国休假。不久，因太平洋战争爆发，艾得理滞留西方，在美国和英国为内地会和基督徒学生联合会（Inter Varsity Christian Fellowship）做联络工作。在美国，他的工作重点在哈佛、耶鲁、普林斯顿等大学校园，鼓励青年学生投身宣教运动。1943年，他又回到英国负责内地会的祷告事工，直到第二次世界大战结束才返回中国。</p>

<p class="forward">1945年，艾得理奉派去重庆，与赵君影等人组建了中国基督徒学生联合会。当时在重庆流亡学生很多，他们中间很多人深受激进思想的影响，高举无神论、科学主义、极端爱国主义等信条，对基督教进行空前的排斥与攻击。有些教会信徒和领袖也被新派神学所影响，与社会各种思潮合流。艾得理对此深表痛心，于是和中国同工赵君影等人一起组建了基督徒学生联合会，在学生中传播基督教真理，吸引许多大学生成为基督徒，后来在他们中间产生了不少基督徒领袖。在接下來的五年中，基督徒学联（CIVF）在数十个校园都设有分会。艾得理担任学联会副总干事，负责探访各地学联会。在学联举办的几次大会上，中国基督徒领袖王明道、贾玉铭、杨绍唐等人大有能力的讲道，使许多人归入基督。后来基督徒学联会的总部设在南京，圣灵在各大学燃起复兴之火，极盛时期，有全职中西干事30人左右。除艾得理外，还有赖恩融（Leslie Lyall）和孔保罗（Paul Contento）等人。1947年7月，他们在南京中山陵附近烈士遗族学校举行了联合夏令会，可谓盛况空前，以致后来赖恩融描述说：&ldquo;那光景真是难得一见，以后再没有了&rdquo;。</p>

<p class="forward">《艾得理传》也如此记载：&ldquo; 中国以前从未有这么多来自各地的基督徒学生，在一起聚集过。我们深信这前所未有的聚会，是神对中国教会的计划&rdquo;。事实确实如此，各地学联的查经班和团契，以及从中培养出来的中国基督徒领袖成为日后各地教会的基础，为中国教会带来极大的祝福。前中国福音会会长、已故赵天恩牧师如此评价艾得理说：&ldquo;从历史角度看，艾得理和赵君影牧师在大学中建立基督教学联，领导福音派学生运动，影响非常深远，尤其当时的&lsquo;基督徒学生运动&rsquo;（SCM）正趋向新派，富有社会主义色彩，而艾得理等人所领导的学联，不但传讲纯正的福音，而且常因真道为SCM所抨击，却为中国校园福音派学生提供了一个合乎圣经的明确路线。在这方面，艾与赵无疑是近代中国教会史上非常重要的人物 &rdquo;。</p>

<p class="forward">1949年，中国共产党夺取政权，在华宣教士皆被迫离开中国，艾得理亦离开这片他生活、服务16年（1934 - 1950）之久的土地，回到美国，再次加入美国校际团契（IVCF）的事奉。1956年，艾得理抵达香港，出任第一届国际学生福音团契（International Fellowship of Evangelical Students）远东区总干事，拉开了香港学生 福音工作的序幕。在香港工作12年（1956-1968）里，他先后成立了毕业生基督徒团契，香港基督徒学生福音团契和福音阅览室，并鼓励和带领一班青年人投身其中，许多日后在香港教会或机构中扮演重要角色的人物，都直接或间接地与他的工作和影响相关。除香港外，他还到亚洲十几个国家巡回，鼓励基督徒学生组成校园团契，为基督作见证。他在东南亚各国共催生出6个会员团契，1957年台湾校园团契的成立，也是3他一手促成的。直接受其影响的是早年留学美国麻省理工学院，后来成为台湾清华大学校长的张明哲教授。在艾得理的启发与带领下，他担任台湾校园团契执行委员会主席达20年之久。</p>

<p class="forward">除学生工作外，艾得理的另一事奉的里程碑是接受海外基督使团（The Overseas Missionary Fellowship，原中华内地会）的任命，到新加坡建立门徒训练中心，以培养亚洲基督徒领袖。该中心招收大学毕业生，训练他们将属灵操练和学习，融合在日常生活中。他担任该 中心主任8年之久，直到1976年荣休为止。</p>

<p class="forward">退休后的艾得理在香港中国神学研究院任教二年后，回到美国加州柏克莱（Berkley）定居，并在柏克萊的新學院（New College）担任宣教學教授十多年，深受學生，尤其是亞洲學生的愛戴。在其余生中，除讲学、传道及参与国际校园福音团契的事奉外，大部份时间用在关注中国福音事工上，包括搜集资料，按时寄发祷告材料给关心中国事工的肢体，并鼓励成立为中国祈祷小组等。1976年，他发起&ldquo;守望中华&rdquo;代祷会。從1978年起他开始数度回中国探访教会和主内肢体。探访期间，他亲眼看见中国教会的复兴和需要，尤其是家庭教会的需要。他们的需要促使他参与中国代祷团契的事工，印发每月一期的代祷信。他鼓励海外基督徒要向中国基督徒学习，并在屬灵争战中与他们联手。他为中国教会的需要所发出的声音，感动许多人投身到中国大陆事工中去。1979年，海外基督使团在香港成立&ldquo;中国事工部&quot;，艾得理应邀成为北美支部的召集人。在美国各地召开&ldquo;中国事工讲座&rdquo;（China Awareness Seminar ），让美国基督徒看到上帝在中国奇妙的作为，并激起他们对中国的代祷和关爱。他在自己的家中亦设立一个祈祷小组，按时聚会直到他快要离世时为止。</p>

<p class="forward">艾得理从年少时就决心以荣耀神为旨志，因此他常常谨慎、自省，唯恐自己的骄傲会阻挡他的正常事奉。晚年的时候他更怕自己未能贯彻始终而羞辱主的名，他曾讲过这样一段话：&ldquo;当我获通知被任命为国际学生福音团契董事会主席时，我了解到这对我是个很大的试探，会引发我的骄傲，因为我向来是经不起这种诱惑的。我盼望我的动机是为了荣耀神，我知道我这方面常常需要被洁净。&rdquo;从中可见他谦卑、自守的属灵美德。</p>

<p class="forward">1991年冬天，80岁的艾得理应邀在加拿大一个华裔冬令营中做讲员。一天，当他讲完课后，在雪地上行走时不慎跌倒，造成骨盘断裂。虽疼痛难忍，但他仍对营会负责同工们说：&ldquo;如果你们能把我扶上讲台，我还是可以把余下的四堂课讲完的。&rdquo;他所得到的回答当然是否定的。&ldquo;那么就拍成录像带好了。&rdquo;躺在病床上的艾得理又提出了第二个建议。就这样，艾得理就留下了 &ldquo;病床上的录像带&rdquo;这一美好、感人的见证，足见这位全力以赴的宣教士的至死忠心。</p>

<p class="forward">1994年5月，艾得理走完他一生的旅程，病逝加州柏克莱家中，享年83岁，葬于奥克兰（Oakland）近郊的中国山（China Hill）。安息礼拜一切从简，没有歌功颂德的悼文。他的一生给后世基督徒留下一个很好的榜样，告诉他们怎样去敬畏神，怎样尽心地为神的国工作，以致将荣耀归给神。在当今这个热衷于行政计划、喜欢轰轰烈烈、标榜成就、善于自我宣传的世代，他的敬畏与敬虔、他的谦卑与执著，正好教导我们怎样回避那隐藏在世俗标准之下的疏离、骄傲、自大和功利。他的一生亦正好体现了清教徒一贯以来的精神：不仅度严谨、自律的生活，更要在任何情况下，都以荣耀神为人生最高目标，并且高举神的话语，绝不屈服于世间的强权。</p>

<p class="forward">艾得理年轻时，就为自己设定了三个以基督为中心的目标： 1. 认识基督。&ldquo;使我认识基督，晓得祂复活的大能，并且晓得和祂一同受苦，效法祂的死&rdquo;（腓立比书3:10）。2.取悦基督。&ldquo;所以无论是住在身内，离开身外，我们立了志向，要得主的喜悦&rdquo;（哥林多后书5:9）。3.传扬基督。&ldquo;那把我从母胎里分别出来，又施恩召我们的神，既然乐意将祂儿子启示在我心里，叫我把祂传在外邦人中 &hellip;&hellip;&rdquo;（加拉太书1:15- 16）。艾得理一生目标明确，并努力践行。他的这三个目标可作为他一生的概括和总结，也可作为后世基督徒努力追求的人生目标。</p>

<p class="forward">艾得理安息主怀7年后，他的终生伴侣德忠玉师母亦于2011年10月安返天家与之团聚了。 载自：《华人基督教史人物辞典》 http://www.bdcconline.net/zh-hans/stories/by-person/a/ai-deli.php</p>



<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->