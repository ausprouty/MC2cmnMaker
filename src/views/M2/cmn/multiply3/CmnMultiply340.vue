<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
                        <div class="chapter_number ltr"><h1>40.</h1></div>
                        <div class="chapter_title ltr"><h1>持守福音——福音震撼城市（以弗所）</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒19:20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>主的道大大兴旺，而且得胜，就是这样。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">以弗所人逼迫保罗的原因和腓立比一样，是因为福音阻碍了靠偶像谋利者的财路。这次暴动正好给保罗一个该离开的印证（<span class="popup-link" @click = "popUp('pop2')"> 徒19:21</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>这些事完了，<u class="person underline">保罗</u>心里定意经过了马其顿、亚该亚，就往耶路撒冷去，又说：&ldquo;我到了那里以后，也必须往罗马去看看。&rdquo;</p>
	<!-- end bible --></div>
	整卷《使徒行传》都印证了&ldquo;人的怒气要成全祢的荣美。人的余怒祢要禁止&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 诗76:10</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<p><sup class="versenum">10&nbsp;</sup>人的愤怒要成全你的荣美，人的余怒你要禁止。</p>
	</div>
	<!-- end bible --></div>
	不管撒但如何攻击或是想借人设下计谋，但只要不在神旨意里的，一点伤害也不会临到神的儿女。神必亲自负责祂儿女的安全，并把撒但的攻击转为对神计划的推动。在基督里我们有十分的平安，要知道凡事都有主的美意，祂掌管一切并使万事在祂里面互相效力，叫爱祂的我们得益处。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">以弗所是一个学习和施行法术的中心，保罗在这个地方必须和灵界的恶势力交锋，因此神借着保罗的手行了一些异常的神迹，期间发生了一个使当地人惊惧的事件，神的能力彰显在这些事件中，耶稣的名因此被传开了，连许多行邪术的人都公开摒弃了自己的法术。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒19:23-41》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒19:23-41</button><div class="collapsed" id ="Text0">

<p><sup>23</sup>那时，因为这道起的扰乱不小。<sup>24</sup>有一个银匠，名叫底米丢，是制造亚底米神银龛的，他使这样手艺生意发达。<sup>25</sup>他聚集他们和同行的工人，说：&ldquo;众位，你们知道我们是倚靠这生意发财。<sup>26</sup>这保罗不但在以弗所，也几乎在亚西亚全地，引诱迷惑许多人，说：&lsquo;人手所做的，不是神。&rsquo;这是你们所看见、所听见的。<sup>27</sup>这样，不独我们这事业被人藐视，就是大女神亚底米的庙 也要被人轻忽，连亚西亚全地和普天下所敬拜的大女神之威荣也要消灭了。&rdquo;</p>

<p><sup>28</sup>众人听见，就怒气填胸，喊着说：&ldquo;大哉，以弗所人的亚底米啊！&rdquo;<sup>29</sup>满城都轰动起来。众人拿住与保罗同行的马其顿人该犹和亚里达古，齐心拥进戏园里去。<sup>30</sup>保罗想要进去，到百姓那里，门徒却不许他去。<sup>31</sup>还有亚西亚几位首领，是保罗的朋友，打发人来劝他，不要冒险到戏园里去。</p>

<p><sup>32</sup>聚集的人纷纷乱乱，有喊叫这个的，有喊叫那个的，大半不知道是为甚么聚集。<sup>33</sup>有人把亚历山大从众人中带出来，犹太人推他往前，亚历山大就摆手，要向百姓分诉。<sup>34</sup>只因他们认出他是犹太人，就大家同声喊着说：&ldquo;大哉，以弗所人的亚底米啊！&rdquo;如此约有两小时。</p>

<p><sup>35</sup>那城里的书记安抚了众人，就说：&ldquo;以弗所人哪，谁不知道以弗所人的城是看守大亚底米的庙，和从宙斯那里落下来的像呢？<sup>36</sup>这事既是驳不倒的，你们就当安静，不可造次。<sup>37</sup>你们把这些人带来，他们并没有偷窃庙中之物，也没有谤讟我们的女神。<sup>38</sup>若是底米丢和他同行的人有控告人的事，自有放告的日子（注：或作&ldquo;自有公堂&rdquo;），也有方伯可以彼此对告。<sup>39</sup>你们若问别的事，就可以照常例聚集断定。<sup>40</sup>今日的扰乱本是无缘无故，我们难免被查问。论到这样聚众，我们也说不出所以然来。&rdquo;<sup>41</sup>说了这话，便叫众人散去。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/340.mp4" type="button" class="external-movie">
         观看&nbsp;徒19:23-41&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">主的手如何借着门徒在这城中动工和带来影响？结果如何？</li>
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

<p class="up">每年有几百万的信众和游客来到以弗所的亚底米神庙敬拜。宏伟壮丽的亚底米神庙是古代世界的七大奇景之一。有许多的人成为耶稣的信徒，导致那些卖偶像维生的人滞销亏本。银匠底米丢鼓动同行工人的愤怒，便掀起一场暴动抵制保罗和他所传的信息。保罗在以弗所长期居留的期间，与地方几位首领成为朋友。他们帮助保护保罗，免于愤怒群众的攻击。主使用书记安抚了众人，他也警告大家说，再这样下去会给城里带来从罗马皇帝而来的麻烦。</p>

<p class="up">从这个故事，我们学到保罗培育领袖的一个重要方式，就是让他们参与到事工中。该犹和亚里达古从正在收割庄稼的马其顿来到这里，协助正在拓展的福音运动。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒19:40-41</p>

<p class="forward bible"><sup>40</sup>今日的扰乱本是无缘无故，我们难免被查问。论到这样聚众，我们也说不出所以然来。&rdquo;<sup>41</sup>说了这话，便叫众人散去。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">福音所到之处，在今天可能会导致什么行业衰败（或受影响）？信耶稣会损害人的既得利益吗？为什么？</li>
</ul>

<p class="indent2">又或者如果你是当时一个制作偶像的匠人，又发现保罗讲的可能是真的，你会怎么办？为什么？</p>

<ul class="forward">
	<li class="forward">你经历过聚众闹事的情景吗？以弗所事件对我们有什么提醒或看见？</li>
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
	<li class="forward">不但外邦人常常会表面上尊崇神，实际上却为他们自身的利益打算，连基督徒也可能会以敬虔为得利的门路(<span class="popup-link" @click = "popUp('pop4')"> 提前6:5</span>)。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>并那坏了心术、失丧真理之人的争竞。他们以敬虔为得利的门路。</p>
	<!-- end bible --></div>

	<ul class="forward">
		<li class="forward">为福音传到各地，可能会带来一些人经济的影响，但求主开他们的心眼，看到所做的若为主所恨恶，就愿意悔改，而非聚众闹事，与主为敌。</li>
		<li class="forward">为教会与宣教士在当地有美名和恩宠，让人看到主是奇妙可畏，施行奇事的创造主。也求主保守看顾祂的百姓，在神和人面前都站立得住。主耶稣的名因此尊大，主的道大大兴旺，而且得胜。</li>
		<li class="forward">为信徒的生命真实被主改变，存敬畏的心跟随主。若有任何诡诈或是牟利的动机和心态，求圣灵亲自责备，并愿意马上悔改在主的面前。</li>
	</ul>
	</li>
	<li class="forward">现今是网络时代，很多的言论都在新媒体中发出，一个不留神，很容易被这些言论影响或是被激怒而互相攻击和抹黑。求主保守我们的心，不被蒙蔽或是参与&ldquo;聚众闹事&rdquo;的&ldquo;网战&rdquo;，而是更有智慧和创意借着网络来做宣教。</li>
	<li class="forward">本周把《哥林多后书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image8.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image8.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image8.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul class="forward">
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
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">曾如有人说&ldquo;手机是我的牧者，我必不至于缺乏&hellip;&hellip;&rdquo;，对现代人而言，手机早已经超出我们的基本需要，它正在耗费我们的心智，占据我们大量宝贵的时间，在潜移默化中，我们价值观也慢慢的被这现代的、人本的、消费的思想所塑造，使我们本当被圣经真理塑造的时间，被各种无营养的资讯所占有。求主保守我们的心胜过保守一切，因为我们的财宝在哪里，我们的心也在那里。也求主赐我们智慧晓得如何正确并有效使用新媒体和科技，有创意的将福音传开。</li>
	<li class="forward">求主捆绑撒但一切拦阻人信主的工作；释放一切听见福音的人心，使他们从黑暗中归向光明，从撒但的权势归向基督，得享主为他们预备丰盛的救恩。</li>
	<li class="forward">分享教会或个人代祷需要。（最后请一位作结束和祝福祷告）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->