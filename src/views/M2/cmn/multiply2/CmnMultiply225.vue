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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣揭示真理</h1></div>
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
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约5:16-17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>所以犹太人逼迫耶稣，因为他在安息日做了这事。<sup class="versenum">17&nbsp;</sup>耶稣就对他们说：&ldquo;我父做事直到如今，我也做事。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p><span><span><span lang="ZH-CN">耶稣来是为上帝作见证，祂所说所做的一切是出于上帝，因此祂对自己身份权柄的宣称也就是上帝的宣称，当人看见耶稣就是看见上帝。耶稣这一生都在彰显上帝的慈爱、公义和信实。让我们存谦卑受教的心来认识耶稣，学像耶稣！</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">因为耶稣触犯了安息日不可做工的规定，医治病了38年的瘫子，惹恼了耶路撒冷的宗教领袖。更让他们震怒的是，耶稣竟然将自己看做和上帝同等。此时耶稣有如在审讯的法庭上，针对原告指控的罪状，他提出有力的答辩。耶稣直接进入问题的核心，就是祂与父的关系，祂并不是单独行事，祂所做的一切（包括在安息日治病）都是父的旨意。祂的权柄是从父来的，父爱子，因此父还要将更大的权柄赐给子，就是赐人生命和审判的权柄。人若不尊敬子，就是不尊敬父，因为子是父差遣来的，祂和父有同等的地位。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音5:16-47》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音5:16-47</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>所以犹太人逼迫耶稣，因为他在安息日做了这事。<sup>17</sup>耶稣就对他们说：&ldquo;我父做事直到如今，我也做事。&rdquo;<sup>18</sup>所以犹太人越发想要杀他，因他不但犯了安息日，并且称　神为他的父，将自己和　神当作平等。<sup>19</sup>耶稣对他们说：&ldquo;我实实在在地告诉你们：子凭着自己不能做什么，惟有看见父所做的，子才能做；父所做的事，子也照样做。<sup>20</sup>父爱子，将自己所做的一切事指给他看，还要将比这更大的事指给他看，叫你们希奇。<sup>21</sup>父怎样叫死人起来，使他们活着，子也照样随自己的意思使人活着。<sup>22</sup>父不审判什么人，乃将审判的事全交与子，<sup>23</sup>叫人都尊敬子如同尊敬父一样。不尊敬子的，就是不尊敬差子来的父。<sup>24</sup>我实实在在地告诉你们：那听我话、又信差我来者的，就有永生，不至于定罪，是已经出死入生了。<sup>25</sup>我实实在在地告诉你们：时候将到，现在就是了，死人要听见　神儿子的声音，听见的人就要活了。<sup>26</sup>因为父怎样在自己有生命，就赐给他儿子也照样在自己有生命，<sup>27</sup>并且因为他是人子，就赐给他行审判的权柄。</p>

<p><sup>28</sup>你们不要把这事看作希奇。时候要到，凡在坟墓里的，都要听见他的声音，就出来。<sup>29</sup>行善的，复活得生；作恶的，复活定罪。<sup>30</sup>我凭着自己不能做什么，我怎么听见，就怎么审判。我的审判也是公平的，因为我不求自己的意思，只求那差我来者的意思。</p>

<p><sup>31</sup>我若为自己作见证，我的见证就不真；<sup>32</sup>另有一位给我作见证，我也知道他给我作的见证是真的。<sup>33</sup>你们曾差人到约翰那里，他为真理作过见证。<sup>34</sup>其实我所受的见证不是从人来的；然而我说这些话，为要叫你们得救。<sup>35</sup>约翰是点着的明灯，你们情愿暂时喜欢他的光。<sup>36</sup>但我有比约翰更大的见证，因为父交给我要我成就的事，就是我所做的事，这便见证我是父所差来的。<sup>37</sup>差我来的父也为我作过见证。你们从来没有听见他的声音，也没有看见他的形像。<sup>38</sup>你们并没有他的道存在心里，因为他所差来的，你们不信。<sup>39</sup>你们查考圣经（注：或作&ldquo;应当查考圣经&rdquo;），因你们以为内中有永生；给我作见证的就是这经。<sup>40</sup>然而你们不肯到我这里来得生命。<sup>41</sup>我不受从人来的荣耀，<sup>42</sup>但我知道，你们心里没有　神的爱。<sup>43</sup>我奉我父的名来，你们并不接待我；若有别人奉自己的名来，你们倒要接待他。<sup>44</sup>你们互相受荣耀，却不求从独一之 神来的荣耀，怎能信我呢？<sup>45</sup>不要想我在父面前要告你们，有一位告你们的，就是你们所仰赖的摩西。<sup>46</sup>你们如果信摩西，也必信我，因为他书上有指着我写的话。<sup>47</sup>你们若不信他的书，怎能信我的话呢？&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/225.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音5:16-47&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
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
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣宣称上帝是祂的真父亲，并且祂与上帝同等。祂用了五个见证来支持这个宣称：耶稣自己的宣称（19-31节）。施洗约翰的见证（33-35节）。耶稣所做的事（36节）。洗礼时天父的声音（37-38节）旧约圣经（39-47节）。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约5:30</p>

<p class="forward bible"><sup>30</sup>我凭着自己不能做什么，我怎么听见，就怎么审判。我的审判也是公平的，因为我不求自己的意思，只求那差我来者的意思。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">根据犹太人的信仰，生命的开始和结束只有上帝才能掌管，耶稣有上帝所赐掌管生命和审判的权柄，无疑显明了祂的身分。一个人若作为世上君王的使节，他的所言和所行即代表差派祂的君王，礼遇使节即是尊敬差派祂的君王，耶稣正是上帝所差派最重要的大使，因此，不尊敬子就是不尊敬父。 我们今天是否一直在为一些神学论点而争辩，而忘了圣经所指向的耶稣。你想耶稣最在乎我们知道的是什么？为什么？</li>
	<li class="forward">&ldquo;永生&rdquo;不是死了以后进天堂，而是信主之后即进入永生，你对永生的认识是这样吗？这样的体认会带给你什么冲击吗？ 请分享你&ldquo;出死入生&rdquo;的经历。当你认识到，耶稣不但是赐人生命的主，祂也是审判的主，它会带给你什么警惕吗？</li>
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
	<li class="forward">与小组一起讨论，可以如何继续耶稣的事工，为主得人、造就人、训练人和差遣人，有份参与在大使命的行列里。</li>
	<li class="forward">在《福音行动表》选出2-3位，这周与他们分享《四件事》小册子的，听听他们对主耶稣的看法。</li>
	<li class="forward">这周抽空将《耶稣生平》电影观赏一遍。求神帮助你对主耶稣有全面的认识，借着耶稣的一生与事奉，明白神伟大奇妙的救恩与作为。下周在小组中分享心得。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

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

<p>主耶稣基督，我们感谢赞美祢！祢是道路、真理和生命的主。祢是世人到神那里的唯一道路，是向我们启示真理的主，更是赐人永恒生命的主！主啊，我们认定祢是我们的大牧者，我们是祢手中的羊。谢谢祢保护我们脱离罪恶和死亡，不再受罪和死的捆绑和辖制。如今在基督里借着圣灵我们可以得自由。求主帮助我们有颗渴慕真理的心，凡事愿意谨守遵行祢话语的吩咐而行，讨祢的喜悦。奉主耶稣的名祈求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->