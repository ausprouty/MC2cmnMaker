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
                        <div class="chapter_number ltr"><h1>22.</h1></div>
                        <div class="chapter_title ltr"><h1>安提阿教会的成立——差传的基础</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒11:16-17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>我就想起主的话说：&lsquo;<u class="person underline">约翰</u>是用水施洗，但你们要受圣灵的洗。&rsquo;<sup class="versenum">17&nbsp;</sup>神既然给他们恩赐，像在我们信主耶稣基督的时候给了我们一样，我是谁，能拦阻神呢？&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">摩西律法规定，走兽、昆虫和飞鸟分成洁净的和不洁净的，犹太人不可吃不洁净的物（<span class="popup-link" @click = "popUp('pop2')"> 利11:46-47</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">46&nbsp;</sup>&ldquo;这是走兽、飞鸟和水中游动的活物，并地上爬物的条例，<sup class="versenum">47&nbsp;</sup>要把洁净的和不洁净的、可吃的与不可吃的活物，都分别出来。&rdquo;</p>
	<!-- end bible --></div>
	此项饮食条例的设立，用意在使犹太人和外邦人有所分别，归神为圣。律法最大的功用是预表基督，把人引到基督面前。现在基督已经来了，祂满足了律法，律法的历史任务已经完成了。如果使徒们还停留在律法的阶段上，就跟不上神的计划。因为耶稣已成全律法（<span class="popup-link" @click = "popUp('pop3')"> 太5:17</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>&ldquo;莫想我来要废掉律法和先知，我来不是要废掉，乃是要成全。</p>
	<!-- end bible --></div>
	律法的总结就是基督，使凡信祂的都得着义（<span class="popup-link" @click = "popUp('pop4')"> 罗10:4</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>律法的总结就是基督，使凡信他的都得着义。</p>
	<!-- end bible --></div>
	感谢神，如今我们可以因信基督，在祂里面都归为一了，不分彼此。这是何等大的福音啊！</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当彼得回到了耶路撒冷，那些奉割礼的门徒就和他争辩，他们不敢明明争辩外邦人不能领受神的道，他们只争辩彼得进入未受割礼之人的家和他们一同吃饭。他们把宗教仪式看得比救恩真义更重要了。彼得只好将整个过程，从看见异象，到圣灵如何降在他们身上，原原本本地说了一遍。他的结论是：&ldquo;神既然给他们恩赐，象在我们信主耶稣基督的时候给了我们一样；我是谁，能拦阻神呢？&rdquo;众人听见这话，就不言语了，只归荣耀与神。他们突破了原有的思想障碍，接受外邦人也能得救恩了。</p>

<ul>
	<li class="nobreak-final-final">从地理上讲，宣教的工作被延展，越过犹大及撒玛利亚（<span class="popup-link" @click = "popUp('pop5')"> 徒8:1</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>从这日起，耶路撒冷的教会大遭逼迫。除了使徒以外，门徒都分散在犹太和撒马利亚各处。</p>
	<!-- end bible --></div>
	直至腓尼基，即今天的黎巴嫩，以及塞浦路斯及叙利亚的城市安提阿；从文化的角度看，宣教的工作超越犹太人，而普及与外邦人。</li>
</ul>

<p class="indent2">&ldquo;希腊人&rdquo;（或希利尼人）指犹太民族之外各民族的人，有时也用这个字指长在外邦、说希腊话的犹太人；亚历山大的扩张使希腊语成为当时的世界通用语言。这是向外邦人传扬福音的开始，也是教会布道工作的一大突破。不过，惟独到了安提阿，他们才向非犹太人传讲，而且多人归主。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒11:19-30》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒11:19-30</button><div class="collapsed" id ="Text0">

<p><sup>19</sup>那些因司提反的事遭患难四散的门徒，直走到腓尼基和塞浦路斯并安提阿。他们不向别人讲道，只向犹太人讲。<sup>20</sup>但内中有塞浦路斯和古利奈人，他们到了安提阿，也向希腊人传讲主耶稣（注：有古卷作&ldquo;也向说希腊话的犹太人传讲主耶稣&rdquo;）。<sup>21</sup>主与他们同在，信而归主的人就很多了。</p>

<p><sup>22</sup>这风声传到耶路撒冷教会人的耳中，他们就打发巴拿巴出去，走到安提阿为止。<sup>23</sup>他到了那里，看见　神所赐的恩就欢喜，劝勉众人，立定心志，恒久靠主。<sup>24</sup>这巴拿巴原是个好人，被圣灵充满，大有信心。于是，有许多人归服了主。</p>

<p><sup>25</sup>他又往大数去找扫罗，<sup>26</sup>找著了，就带他到安提阿去。他们足有一年的工夫和教会一同聚集，教训了许多人。门徒称为基督徒是从安提阿起首。</p>

<p><sup>27</sup>当那些日子，有几位先知从耶路撒冷下到安提阿。<sup>28</sup>内中有一位名叫亚迦布，站起来，藉著圣灵指明天下将有大饥荒。这事到革老丢年间果然有了。<sup>29</sup>于是门徒定意照各人的力量捐钱，送去供给住在犹太的弟兄。<sup>30</sup>他们就这样行，把捐项托巴拿巴和扫罗送到众长老那里。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/322.mp4" type="button" class="external-movie">
         观看&nbsp;徒11:19-30&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">之前的几个故事都把焦点放在彼得身上，然而他并非是这个时期唯一活跃的信徒。实际上， 还有许多人也很活跃。扫罗逼迫教会的期间，那些逃离耶路撒冷的信徒也去向人分享他们的信仰，不过只限于传给犹太人。如同上一个故事，这个故事也让我们看见早期犹太信徒放弃文化偏见所经历的挣扎。然而，借着主的能力和带领，有些说希腊话的犹太人，是从塞浦路斯和北非古利奈（利比亚）来的信徒，他们在叙利亚的多文化大城安提阿，向非犹太人传福音。安提阿的教会是由平信徒所建立的第二代教会。生于塞浦路斯的巴拿巴，被耶路撒冷教会打发到那里去证实所发生的事。他看见主的工作，又想到扫罗非常适合来这里帮助建造这个刚起步的外邦人教会。在安提阿建立教会不仅是圣灵的新工作，用&ldquo;基督徒&rdquo;这个名称来形容耶稣的门徒，也是在安提阿开始的。这群外邦信徒慷慨地捐钱给耶路撒冷教会的犹太信徒，表达他们的爱心与在基督里的联结。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒11:25-26</p>

<p class="forward bible"><sup>25</sup>他（巴拿巴）又往大数去找扫罗，<sup>26</sup>找著了，就带他到安提阿去。他们足有一年的工夫和教会一同聚集，教训了许多人。门徒称为基督徒是从安提阿起首。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶路撒冷教会派遣巴拿巴的主要目的，是要证实外邦人对福音的接受，是否真实出于神。而教会所打发的人选巴拿巴非常合适，一方面因他的心胸宽大，气度恢宏(参23-26节)；另一方面他也是塞浦路斯人(徒4:36)，由他来了解并帮助这些&ldquo;塞浦路斯人&rdquo;(参20节)的工作，自然会比别人更加得心应手。</li>
</ul>

<p class="indent2">从经文中你看到巴拿巴到了安提阿那里做了哪些事情？安提阿的教会的建立经历了哪些的阶段？反思我们教会/倍增小组在训练新同工、领袖或倍增教会上做了什么？有什么是我们教会/小组接下来可以去做的？</p>

<ul class="forward">
	<li class="forward">27-30节，我们看到一个幼小的外邦教会给予耶路撒冷较成长的教会以援手，说明这个教会的什么特征？（比较徒2:44，45；4:34-37）我们的教会是否也像这个教会一样，在实际的奉献上表达出来吗？</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">巴拿巴在安提阿教会担当了重要的领袖角色，他善良的品行、充足的信心、美好的灵命影响了周围的信徒（徒4:36、37；9:27）。他也是属灵的伯乐，发掘、培养了年轻一代的同工建造神的教会。使徒行传中，路加再没有以&ldquo;好人&rdquo;（徒11:24）形容第二个人，巴拿巴的属灵恩赐，与司提反并驾齐驱。他在安提阿看见教会的增长是神亲手成就的，就为神的恩满心欢喜。他没有催迫他们遵行律法的要求，而是劝勉他们在信心上坚固
	<ul class="forward">
		<li class="forward">祷告神为你预备属灵的伯乐，同时你也成为其他弟兄/姐妹的属灵伯乐。</li>
		<li class="forward">为你自己的属灵生命和服事，能成为教会的祝福，为主得着一批年轻的教会属灵领袖，一起倍增小组和植堂。</li>
		<li class="forward">为教会能够成为安提阿教会，成为周边教会的祝福。</li>
	</ul>
	</li>
	<li class="forward">你和你重点栽培的门徒持续并忠心参与每月一次的《发展领袖》培训，更多被发展和受装备，成为教会新一代的领袖和组长。</li>
	<li class="forward">推动祷告联祷会，连接城市中各教会的牧者，一起为城市祷告，并一起认领宣教的族群和地点。</li>
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">求主在教会当中兴起更多的&ldquo;巴拿巴&rdquo;&mdash;&mdash;有善良的品行、充足的信心、心胸宽大和气度恢宏，为主培养和建立年轻的领袖，坚固众人的信心，建立教会。</li>
	<li class="forward">为这城市的众教会和牧者同工，在基督里，彼此谦卑配搭，互相扶持，借着祷告，看神在各地的作为，并同心认领未得之民，将福音带到当中。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->