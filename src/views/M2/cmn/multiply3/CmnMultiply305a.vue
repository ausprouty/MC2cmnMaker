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
                        <div class="chapter_number ltr"><h1>5.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《二十一世纪的华人差传策略与方法》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2>21 世纪基督徒装备100课~第64 课／林安国</h2>

<p class="forward">过去的二十世纪，神透过西方宣教士给了华人教会很多属灵的资源，华人教会不单接受了福音，也在纯正的信仰、教会的建立、人力的装备、宣教的异象、工场的经验等渐渐储建了根基。面对新世纪，是神给我们在普世传福音的事工上急起直追的机会。二十一世纪是我们华人教会应该起来宣教的日子，我们应回到神的心意，再认定主的大使命，同心兴旺他的国度，努力工作，警醒等候，直到主来。</p>

<p class="forward">华人教会在这契机参与普世宣教大业，可循根基重整焦点、基地的差传化和工场策略发展 三条路线前进。以下是笔者对华人教会差传整体发展的一些策略建议，分享如下。</p>

<h2 class="forward">一、 根基重整焦点</h2>

<p class="indent">华人教会要建立稳当的差传事工及长远的维持力，必须回到圣经差传的根基上。我们必须问：神对整个人类的心意及计划是什么？教会存在的使命为何？主再来时国度如何完成等问题。从差传的角度，圣经中有四类这方面的经文帮助我们把焦点重整于差传神学及教会使命：</p>

<p class="indent"><strong>(一) 神的本性</strong>：他的本性是慈爱的，他的爱普及世界万国万族万民(参<span class="popup-link" @click = "popUp('pop1')"> 约3:16</span>)。</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>&ldquo;神爱世人，甚至将他的独生子赐给他们，叫一切信他的不致灭亡，反得永生。</p>
<!-- end bible --></div>

<p><strong>(二) 世人光景</strong>：世人都犯了罪，亏欠了神的荣耀，而罪的工价乃是死，包括灵魂体的沉沦(参<span class="popup-link" @click = "popUp('pop7')"> 罗3:23</span>)。</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">23&nbsp;</sup>因为世人都犯了罪，亏缺了神的荣耀，</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final"><strong>(三) 神的救赎</strong>：神救赎万民万族的方法是差他的儿子，为我们作了挽回祭，耶稣是神的羔羊，除去世人罪孽的(参<span class="popup-link" @click = "popUp('pop3')"> 约1:29</span>)。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>次日，<u class="person underline">约翰</u>看见耶稣来到他那里，就说：&ldquo;看哪，神的羔羊，除去世人罪孽的！</p>
	<!-- end bible --></div>
	他是救主，而且是惟一的救主，除他以外别无拯救， 因为在天下人间没有赐下别的名，我们可以靠着得救(参<span class="popup-link" @click = "popUp('pop4')"> 徒4:12</span>)。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>除他以外，别无拯救，因为在天下人间，没有赐下别的名我们可以靠着得救。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent"><strong>(四) 神的计划</strong>：神不单定了救法，也制定了计划，要藉着亚伯拉罕及他的后裔，组成一个蒙福又施福的国度，这计划在旧约及新约不断向他的仆人显明，如亚伯拉罕、大卫、约拿、以赛亚、但以理、弥迦、使徒约翰、保罗等人。</p>

<p class="indent"><strong>(五) 子民使命</strong>：神多次向以色列民说明他们蒙拣选的使命，乃是在万民中作神的子民，向他们说：&ldquo;你们是我的见证人。&rdquo;他们的存在不单为以色列全家得救，还要作外邦人的光，将神的救恩传到地极(参<span class="popup-link" @click = "popUp('pop11')"> 赛49:6</span>)。</p>

<div class="popup invisible" id="pop11"><!-- begin bible -->
<p><sup class="versenum">6&nbsp;</sup>现在他说：&lsquo;你做我的仆人，使雅各众支派复兴，使以色列中得保全的归回，尚为小事，我还要使你做外邦人的光，叫你施行我的救恩，直到地极。&rsquo;&rdquo;</p>
<!-- end bible --></div>

<p class="indent"><strong>(六) 教会的使命</strong>：神吩咐门徒成为使徒，被差往普天下传福音给万民，而且培育万民成为主的门徒，把一切主的话教训他们遵守(参<span class="popup-link" @click = "popUp('pop6')"> 太28:18-20</span>)。</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗，<sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
<!-- end bible --></div>

<p><strong>(七) 耶稣的宣教</strong>：凡跟随主脚踪的人，都要思念这位作使者、作宣教士的耶稣(参<span class="popup-link" @click = "popUp('pop9')"> 来3:1</span>)，</p>

<div class="popup invisible" id="pop9"><!-- begin bible -->
<p><sup class="versenum">1 </sup>同蒙天召的圣洁弟兄啊，你们应当思想我们所认为使者、为大祭司的耶稣。</p>
<!-- end bible --></div>

<p>他如何离开天上荣华，道成肉身为人子，背起十架，成为微仆，不单受苦，而且受死， 为要把天国的福音传扬。他本来是富足的，却为人类成了贫穷。他成为模范的宣教士， 在凡事上给我们作了榜样。</p>

<p><strong>(八) 初期教会的宣教行动</strong>：初期教会的宣教历史，是历代宣教历史的根基，他们如何差派， 如何巡回布道，如何解脱犹太文化的枷锁，超过地域深海，把福音从耶路撒冷传到犹太全地，越过撒马利亚，到达小亚细亚及欧洲，直到地极为主作见证。初期教会派出巴拿巴和保罗，后来又产生保罗的差传队，以动静两架构互相配搭，使福音的跨越力倍增及有效(参《使徒行传》)。</p>

<p class="indent"><strong>(九) 圣灵的动力</strong>：圣灵是差传的灵，其动力是跨越之力，圣灵的工作是感动、呼召、差派、 教导、督责等。他主导了教会扩大及拓展路线，也负起了教会质量的增长(参《使徒行传》)。</p>

<p class="indent"><strong>(十) 国度的预言</strong>：主必再来，凡等候他国度来临的人必兴起传福音，而且不怕生死，竭力工作，因为知道他的国度是万民的国度(参<span class="popup-link" @click = "popUp('pop10')"> 启7:9</span>)，</p>

<div class="popup invisible" id="pop10"><!-- begin bible -->
<p><sup class="versenum">9&nbsp;</sup>此后我观看，见有许多的人，没有人能数过来，是从各国、各族、各民、各方来的，站在宝座和羔羊面前，身穿白衣，手拿棕树枝，</p>
<!-- end bible --></div>

<p>因此，福音的工作也是建立万民国度的工作。</p>

<p>以上十类经文皆指向普世差传事工，教会在这根基上建立起使命的神学，回到圣经即等于回到神的心意，回到神的心意及回到他拯救普世的计划。走门徒道路的人及作教会灯台的使者，皆应以此为根基为目标。</p>

<h2 class="forward">二、 基地重整健壮</h2>

<p class="indent"><strong>(一) 病态的教会</strong>：健康的教会是宣教基本的条件，教会不健康，何来力量差传？环视华人教会，有如下的十种病态：</p>

<p class="indent2"><strong>1.&nbsp;<span lang="ZH-CN"><span><span style="color:black">分裂症</span></span></span></strong> ：病症&mdash;&mdash;你伤我，我伤你，最后分开养伤，无力作工。</p>

<p class="indent2"><strong>2. 自闭症</strong>：病症&mdash;&mdash;全世界都不重要，只有&ldquo;我&rdquo;的世界重要，教会把自己困在四壁 内。</p>

<p class="indent2"><strong>3. 近视症</strong>：病症&mdash;&mdash;近的看得清楚，远些便什么也看不见。</p>

<p class="indent2"><strong>4. 麻痹症</strong>：病症&mdash;&mdash;头脑知识很多，手脚却无力。</p>

<p class="indent2"><strong>5. 痴呆症</strong>：病症&mdash;&mdash;不能了解自己的实况，有时会失去方向，不知去了哪里。</p>

<p class="indent2"><strong>6. 失忆症</strong>：病症&mdash;&mdash;最重要的话往往记不起，最重要的事常忘记去作。</p>

<p class="indent2"><strong>7. 萎缩症</strong>：病症&mdash;&mdash;因一些隐藏的病菌使身体某部分或各部分都在不断地萎缩。</p>

<p class="indent2"><strong>8. 自恋症</strong>：病症&mdash;&mdash;教会内围信徒相亲相爱到一个地步，忘记了外面还有一个缺乏爱的世界。</p>

<p class="indent2"><strong>9. 神经症</strong>：病症&mdash;&mdash;想的东西不是正常人所想的，头脑出了问题。</p>

<p class="indent2"><strong>10. 肿瘤症</strong>：病症&mdash;&mdash;少数毒细胞威胁到整个身体的存亡。</p>

<h2 class="forward">(二) 健康的教会：要教会健康，必须有以下十种健康的征兆。</h2>

<p class="indent"><strong>1. 敬拜的教会</strong>：教会是神宝座之所在，信徒到主宝座前是敬拜及事奉，到主耶稣再来 后，信徒就不必再布道及研经，在永恒世界里，教会将喜乐地赞美及敬拜神。可是目前教会最弱的一环往往是向主的敬拜，我们多么需要多放人力、智力、财力，更新今日华人教会死气沉沉的敬拜形式及光景。</p>

<p class="indent"><strong>2. 相爱的教会</strong>：若我们彼此相爱，众人就认出我们是主的门徒了。一家温暖的教会，是一家满有见证力及吸收力的教会，相爱的环境及气氛来自相爱的言语及实际的行动。无论是小型教会或大型教会，切实相爱是教会增长的原动力。</p>

<p class="indent"><strong>3. 喂养的教会</strong>：有食物供应教会自然长大，但教会要健康地长大，不单是有草吃，还要知道供应什么草给羊吃。每家教会都有讲台供应及主日学，能得到滋养的讲台及主日学的课程供应，是难能可贵，寻见者真是有福了。</p>

<p class="indent"><strong>4. 社区教会</strong>：教会的存在不单是为信主的几十个或几百个人，因为还有九十九只羊在教会四壁外，教会的事工应以社区未信的绝大多数为念，可能是 99%或是 98%，因此社区的探访、关怀、服侍等都表明教会是社区之光。</p>

<p class="indent"><strong>5. 门训教会</strong>：教会是一个门训中心，有丰盛生命的长者带着初生属灵的婴孩，以生命影响生命，以榜样模式来塑造他们学像基督的生命。</p>

<p class="indent"><strong>6. 事奉的教会</strong>：教会是有机体，是基督的身体。人人都有恩赐，而且恩赐互相配搭，建立整个身体，恩赐的运用带来有效的事奉，不单各肢体能认识自己的岗位，而且更能荣耀神。健康的教会是一家全体动员的教会，有人强化教会，有人布道使人数增长， 有人领导计划，更有人服侍支援。人人参与，人人分工合作。</p>

<p class="indent"><strong>7. 能力的教会</strong>：健康的教会有两种能力，一是福音的爆炸力(dunamis)，一是对付撒但 的战斗力(exousia)。按《启示录》所记载，exousia 这字义是神给他的子民有这种战 斗的能力，撒但也给他的跟随者有这种能力，但最后的得胜是属于神。这表明神给教会这两种能力，为要使教会能攻入强盛的撒但营垒，抢救人出死入生。</p>

<p class="indent"><strong>8. 延伸的教会</strong>：健康的教会必延伸而倍增，不少教会在植堂的事上不断努力，产生第一代的姊妹教会(sister church)，第二代的女儿教会(daughter church)，继而产生第三代的子孙教会(granddaughter church)。这样，每家教会延续生子生孙，福音便产生延伸之力，很快传遍一民一国。</p>

<p class="indent"><strong>9. 国度的教会</strong>：健康的教会是国度教会，以天国的计划为念，以国度的心胸为怀，以天国的信息为重。这样的教会不单在做教会自己的事工，也与众教会携手合作，又进一步与各机构配搭拓展。国度的教会对自己民族有负担，也在本地向不同民族工作，国度的教会必定是差传的教会。</p>

<p class="indent"><strong>10. 跨越的教会</strong>：正如安提阿教会一样，健康的教会发展及增长的路线必然跨越四壁，跨越本城本国，往普天下去传福音，为了分散的国民或遥远的异族，心中满有负担，爱他们的灵魂，产生训练及差派人力，带着教会的祷告及金钱，顺服主命，跨越出去作成他的工。</p>

<h2 class="forward">三、 工场重整策略</h2>

<p class="indent">华人教会在差传上要成功，不单有正确的差传圣经根基，不单有健康的教会，更需要有发展宣教工场的智慧，以下是发展工场的十个有效策略。</p>

<p class="indent"><strong>(一) 单元策略</strong>：社会的结构乃由不同单元社群组成，福音的发展及植堂的路线若循单元前进必收效更大，因为信主的人都不喜欢越过自己的单元去加入别的单元，因此单元的教会对同单元未信者更有吸力，也比多元混合的教会发展得更快。</p>

<p class="indent"><strong>(二) 培训策略</strong>：耶稣一生的重点都在训练门徒，他也吩咐我们要把所学的教训别人。工场上若只带人信主，而没有训练人成长作领袖，其事工永远建立在宣教士身上，教会便永远做小孩，不能负起自传之责。</p>

<p class="indent"><strong>(三) 服侍策略</strong>：教会与社会中间一定要以服侍为桥梁，不然教外人不会自己找上门寻求福 音，服侍表现了教会的爱心，也铺路让他们自然地踏进教会来。</p>

<p class="indent"><strong>(四) 双刀策略</strong>：教会有两把锋利的镰刀：一是真理的宣讲，一是能力的彰显。耶稣的讲道产生了话语的能力，耶稣的治病赶鬼又表现了属灵的能力。宣讲清醒人的头脑，能力使人 心信服。</p>

<p class="indent"><strong>(五) 收割策略</strong>：收割是目标，撒种是进程。我们不能把撒种当作是工作的完结，就此拍拍手便离开。保罗的植堂乃是把庄稼收入仓库，若单单布道撒种便结束，这是个不智慧的工人，工作会随流消失。</p>

<p class="indent"><strong>(六) 巡回策略</strong>：未信的群体分散各地如羊无牧，收割工人若收缩工作及定点工作，福音就只能留在一城一乡。巡回的策略是使工人流动，使福音涵盖广大禾田，耶稣说：&ldquo;我也必须往别城去。&rdquo;因此他周游四方，在各城各乡传福音。保罗也不在一地停留过久，他不断开拓新的领域。</p>

<p class="indent"><strong>(七) 攻重策略</strong>：集中力量在一些有影响力的城市及群体，把福音建立在重要的据点上。保罗的城市策略皆集中于文化中心、军事中心、经济中心等地，然后把附近较小的乡镇交给这些中心去拓展，这样他便可跨越得更快。</p>

<p class="indent"><strong>(八) 交棒策略</strong>：训练当地的工人起来，时机成熟便交出。工场的事工常发生人际问题，很多时候是宣教士不肯放权、不肯交出。福音初到时可能宣教士是长者，是属灵父母，但孩子长大后便是平辈伙伴，不久孩子成熟就得独立，宣教士不交棒便产生问题。保罗的策略不单是培训提摩太，也肯信任同工而把权交出来。</p>

<p class="indent"><strong>(九) 分援策略</strong>：这是根据耶稣的均平策略，支援人力多的地方应视自己是管家，而把神交托的均分给缺乏的地区。耶稣本来富足，却把富足分给我们，使我们从贫穷成为富足。属灵的分援是宣教美好的策略，使工场加速自养自传。</p>

<p class="indent"><strong>(十) 桥梁策略</strong>：分散的犹太人成为福音的桥梁，使植堂工作不必从零开始，保罗因此每到一处便寻找沃土，这些沃土是自己的同胞，很快建立了核心小组，教会便有根基地建立上去。</p>

<h1 class="forward">&nbsp;</h1>

<h1 class="forward">结论</h1>

<p class="forward">华人教会在差传路上必须建立圣经神学，强化教会做差传基地及有智慧、有策略地发展工 场，这样二十一世纪将名正言顺是&ldquo;华人的世纪&rdquo;，是华人信徒回应神心意而决心参与建立天 国的&ldquo;华人差传世纪&rdquo;。</p>

<h2 class="forward">问题研讨</h2>

<p class="indent">1. 二十一世纪中，华人基督徒可能接得上普世差传的棒吗？假若接不上有什么后果？</p>

<p class="indent">2. 华人教会及基督徒应作什么改变来承接普世差传的棒呢？</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->