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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《被圣灵充满》小册子</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="page transition center">
<div class="content"><em>成长中 | 灰心失意</em>
<div class="row">
<div class="satisifed-offset">
<p class="satisfied"><em>失望中 |满足的<br />
饶恕 |缠累 |挣扎中<br />
喜乐的 |挫败 |兴奋<br />
时好时坏 |空虚<br />
气馁 |责任<br />
亲密的 |不好不坏<br />
痛苦的 |动态的 |内疚的<br />
有活力的 |马马虎虎 |其他？ </em></p>

<p>&nbsp;</p>

<h1 class="satisfied">满足？</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<h2 class="satisfied">你期待更多吗？</h2>

<p class="satisfied">耶稣说：&ldquo;人若渴了，可以到我这里来喝。信我的人，就如经上所说&lsquo;从他腹中要流出活水的江河来&rsquo;。&rdquo;（约翰福音7：37，38）</p>

<h2 class="satisfied">耶稣的意思是什么？</h2>

<p class="satisfied">约翰，这节圣经经文的作者，继续解释，</p>

<p class="satisfied"><em>&ldquo;耶稣这话是指着信他之人要受圣灵说的，那时还没有赐下圣灵来，因为耶稣尚未得着荣耀。&rdquo;（约翰福音7：39）</em></p>

<h2 class="satisfied">耶稣应许到...</h2>

<p class="satisfied">...神的圣灵会满足所有信耶稣基督之人的渴，或者最深的渴望。</p>

<p class="satisfied">然而，许多基督徒并不明白圣灵或者不知道如何在他们每天的生活中经历他。</p>

<p class="satisfied">以下的原则会帮助你明白并享受神的圣灵。</p>

<h1 class="satisfied">神圣的礼物</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">上帝赐给我们他的灵，我们才能经历到和神之间的亲密，并享受所有他为我们准备的一切。</p>

<p class="satisfied">圣灵是我们最深的满足的源泉</p>
</div>
</div>

<h2 class="satisfied">圣灵是上帝的...</h2>

<p class="satisfied">...永恒同在，与我们同在一起</p>

<p class="satisfied"><em>耶稣说：&ldquo;我要求父，父就另外赐给你们以为保惠师，叫他永远与你们同在，就是真理的圣灵。&rdquo;（约翰福音14：16，17）</em></p>

<h2 class="satisfied">圣灵让我们...</h2>

<p class="satisfied">...知道...</p>

<p class="satisfied"><em>&ldquo;我们所领受的，并不是世上的灵，乃是从神来的 灵，叫我们能知道神开恩赐给我们的事。&rdquo;<br />
哥林多前书2：12</em></p>

<p class="satisfied">并体验上帝为我们预备的一切。</p>

<p class="satisfied">&nbsp;</p>

<p class="satisfied">并体验上帝为我们预备的一切。</p>

<p>&nbsp;</p>

<h2 class="satisfied">属血气的人</h2>

<p class="satisfied">属血气的人不领会神圣灵的事，反倒以为愚拙，并且不能知道因为这些事唯有属灵的人才能看透。（哥林多前书2：14）</p>

<h2 class="satisfied">属灵的人</h2>

<div class="thumbnail"><img class="satisfied" src="@/assets/sites/mc2/content/M2/cmn/multiply1/LifeWithTheSpirit.png" /></div>

<p class="satisfied">&quot;属灵的人能看透万事...我们是有基督的心了。&quot;<br />
（哥林多前书2：15，16）</p>

<p class="satisfied"><em>但是顺从圣灵的人体贴圣灵的事（罗马书8：5，新生命译本）</em></p>

<p class="satisfied">为何如此多的基督徒并不满足于他们与上帝同行的经历？</p>

<h1 class="satisfied">现时的艰难</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">如果我们不依靠神的圣灵，我们就不能经历与神之间的亲密关系，并享受他为我们预备的一切。</p>

<p class="satisfied">相信他们自己努力并靠自己力量过基督徒生活的人，会经历失败和挫折，这如同那些活着是为了讨自己喜悦而不是讨神喜悦的人一样。</p>
</div>
</div>

<h2 class="satisfied">我们不能过...</h2>

<p class="satisfied">...基督徒的生活，靠我们自己的力量。</p>

<p class="satisfied"><em>&quot;你们既靠圣灵入门，如今还靠肉身成全吗？你们是这样的无知吗？&quot;<br />
（加拉太书3：3）</em></p>

<h2 class="satisfied">我们不能享受...</h2>

<p class="satisfied">...上帝愿意赐给我们的，如果我们过一个我们自我中心的生活。</p>

<p class="satisfied"><em>&quot;因为情欲与圣灵相争，圣灵和情欲相争，这两个彼此相敌，使你们不能作所愿意作的。<br />
（加拉太书5：17）&quot;</em></p>

<h2 class="satisfied">三种生活方式</h2>

<div class="thumbnail"><img class="satisfied" src="@/assets/sites/mc2/content/M2/cmn/multiply1/ThreeKindsOfLiftStyles.png" /></div>

<p class="satisfied"><em>&quot;弟兄们，我从前对你们说话，不能把你们当作属灵的，只得把你们当作属肉体的，在基督里为婴孩的。我是用奶喂你们，没有用饭喂你们。那时你们不能吃，就是如今还是不能。你们仍旧是属肉体的，因为在你们中间有嫉妒、纷争，这岂不是属乎肉体、照着世人的样子行吗？<br />
（哥林多前书3：1-3）&quot;</em></p>

<p class="satisfied">我们怎样才能过一个依靠圣灵的生活方式呢？</p>

<h1 class="satisfied">亲密之旅</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">顺着圣灵而行，我们会逐步经历到和神之间的亲密关系，并享受所有他为我们准备的一切。</p>

<p class="satisfied">顺着圣灵而行是一种生活方式，这是为他丰盛恩典缘故，学习依靠圣灵的一种生命方式。</p>

<p class="satisfied">我们靠圣灵行事</p>
</div>
</div>

<h2 class="satisfied">我们就有能力</h2>

<p class="satisfied">去过一个讨神喜悦的生活。</p>

<p class="satisfied"><em>所以我说，靠圣灵得生，你就不会满足于罪恶本性的私欲...因我们靠圣灵得生，就让我们靠圣灵行事吧！</em></p>

<h2 class="satisfied">我们经历..</h2>

<p class="satisfied">...与上帝的亲密关系，并体验他为我们预备的一切。</p>

<p class="satisfied"><em>但圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、温柔和节制（加拉太书5：22，23）</em></p>

<h2 class="satisfied">以基督为中心的生命</h2>

<div class="thumbnail"><img class="satisfied" src="@/assets/sites/mc2/content/M2/cmn/multiply1/TheChristCenteredLife.png" /></div>

<p class="satisfied">信心（相信上帝以及他的应许）是基督徒靠圣灵得生的唯一途径。</p>

<h2 class="satisfied">属灵的呼吸...</h2>

<p class="satisfied">...这是一个有力的语言描述，帮助你经历随时依靠圣灵。</p>

<h3>呼气...</h3>

<p class="satisfied">承认当时你认识到的罪恶-认同神关注它，并因神的赦免感谢他，根据约翰一书1：9和希伯来书10：1-25.<br />
认罪要求悔改-在态度和行为上的改变。</p>

<h3>吸气...</h3>

<p class="satisfied">将你生命的主权降服在基督以下，并依靠圣灵，让他充满你，被信心激励。这是根据他的命令（以弗所书5：18）和应许（约翰一书5：14，15）</p>

<p class="satisfied">圣灵怎样用他的能力充满我们呢？</p>

<h1 class="satisfied">圣灵感动的同在</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">我们依靠信心被圣灵充满，使我们可以经历与神之间的亲密关系，并享受他为我们预备的一切。</p>

<p class="satisfied">基督徒生活的本质是上帝在我们当中做什么和通过我们做什么，而不是我们为上帝做什么。基督的生命，透过圣灵的能力，在相信的人中被重造。被圣灵充满是被他管理，也被他感动。</p>
</div>
</div>

<h2 class="satisfied">依靠信心，我们经历...</h2>

<p class="satisfied">...上帝的能力，是透过圣灵经历的。</p>

<p class="satisfied"><em>求他按着他丰盛的荣耀，藉着他的灵，叫你们心里的力量刚强起来。使基督因你们的信，住在你们心里。（以弗所书3：16，17）</em></p>

<h2 class="satisfied">三个重要的问题...</h2>

<p class="satisfied">...要问问你自己：</p>

<p class="satisfied">1.我现在是否已经将我生命的主权降服在我的主耶稣基督以下？（罗马书12：1，2）<br />
2.我是否已经承认我的罪？（约翰一书1：9）罪恶叫神的圣灵担忧（以弗所书4：30）<br />
但是神在他的爱里赦免你一切罪恶-过去的，现在的和将来的-因为基督已经为你死了。<br />
3.我是否真诚地盼望被圣灵管理和感动？（约翰福音7：37-39）</p>

<h2 class="satisfied">依靠信心，要求...</h2>

<p class="satisfied">...圣灵的充满，按着他的命令和应许：</p>

<p class="satisfied">神吩咐我们要被圣灵充满。</p>

<p class="satisfied"><em>&ldquo;...要被圣灵充满。&rdquo;（以弗所书5：18）</em></p>

<p class="satisfied">神应许我们：我们按照他心意祷告，他总是会回答我们。</p>

<p class="satisfied"><em>&ldquo;我们若照他的旨意求什么，他就听我们，这是我们向他所存坦然无惧的心。既然知道他听我们一切所求的，就知道我们所求于他的，无不得着。&rdquo;（约翰一书5：14，15）</em></p>

<p class="satisfied">怎样祈求被圣灵充满...</p>

<h1 class="satisfied">转折点</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">我们唯独靠信心，被圣灵充满。</p>

<p class="satisfied">诚实的祷告是我们信仰的一种表达。</p>
</div>
</div>

<h2 class="satisfied">建议以下的祷告：</h2>

<blockquote>亲爱的天父，我需要你。我承认我犯下罪恶，用我自我的意思过我的生活的方式违背你。我感谢你，透过你儿子在十字架上为我受死，赦免我一切罪恶。现在，我邀请基督再次登上我生命的宝座，成为我生命的王。按照你的吩咐，求圣灵充满我。并照你话语的应许，我凭信心求，你就赐给我。我这样祈求是奉耶稣的名，感谢你用圣灵充满我并引导我的生活。</blockquote>

<p class="satisfied">这样的祷告是否表达了你的心意？如果是，你可以立刻祷告，信任上帝用他的圣灵充满你。</p>

<h2 class="satisfied">如何知道</h2>

<p class="satisfied">你被圣灵充满</p>

<p class="satisfied">你是否曾向上帝祈求用圣灵充满你？<br />
你知道你现在被圣灵充满吗？<br />
-根据什么权威？（上帝自身和他的话语是可信的：希伯来书11：6；罗马书14：22，23）</p>

<p class="satisfied">当你时常持续不断地依靠上帝的灵，你会经历并享受与上帝的亲密关系，和他为我们预备的-一个真正丰盛满足的生命。</p>

<p class="satisfied"><strong><em>一个重要的提醒</em> </strong></p>

<h2 class="satisfied">不要依靠感觉。</h2>

<p class="satisfied">上帝话语的应许，是圣经-不是我们的感觉-这是我们的权威。基督徒靠信心生活，信靠上帝本身及他话语的真实可信。</p>

<p class="satisfied">乘飞机飞信可以类比说明在事实（上帝和他的话语），信心（我们相信上帝和他话语），并感觉（我们的信心和顺服的结果）之间的关系。（约翰福音14：21）</p>

<h2 class="satisfied">相信事实而不是感觉。</h2>

<div class="thumbnail"><img src="@/assets/sites/mc2/content/M2/cmn/multiply1/Plane.png" /></div>

<p class="satisfied">乘坐飞机，我们必须相信飞机和驾驶飞机的飞行员的可靠。我们自信的感觉或恐惧不会影响飞机运载我们的能力，虽然这些的的确确影响我们享受旅程多少。</p>

<p class="satisfied">同样的，我们作为基督徒，不依靠感觉或情绪，但我们将我们的信心放在上帝的可靠和他话语的应许上。</p>

<p class="satisfied">现在你被圣灵充满..</p>

<h1 class="satisfied">全新的开始</h1>

<div class="satisfied-row">
<div class="satisifed-offset">
<p class="satisfied">既然你被圣灵充满:</p>

<h2 class="satisfied">感谢神...</h2>

<p class="satisfied">圣灵将使你：</p>

<p class="satisfied">-过一个荣耀基督的生活。<br />
（约翰福音16：14）<br />
-增长你对上帝及其话语的认识。<br />
（哥林多前书2：14，15）<br />
-过一个讨神喜悦的生活。<br />
（加拉太书5：16-23）)</p>
</div>
</div>

<h2 class="satisfied">记住耶稣的应许：</h2>

<p class="satisfied">&ldquo;但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。&rdquo;<br />
使徒行传1：8</p>
&nbsp;


<p class="copyright">&copy; 2016-2020 Power to Change (formerly Campus Crusade for Christ Australia) A.C.N 002 310 796</p>
</div>
</div>
</div>
</div>
</div>
</div>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->