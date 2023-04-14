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
                        <div class="chapter_number ltr"><h1>29.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与权柄</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路6:36</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">36&nbsp;</sup>你们要慈悲，像你们的父慈悲一样。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣所宣扬的国度伦理是众人闻所未闻的，它颠覆了世界的价值观，让人感到高不可攀，无法达到。然而耶稣确实要求人付诸行动。因为国度的伦理不是世界的标准，也不是对世人的要求，它是为天国的子民制定的。凡拥有神儿子生命的人才有可能理解和遵行，并活出有别于世人的爱。因为只有凭着神儿子的生命，才能爱那恨我们的&ldquo;仇敌&rdquo;，&ldquo;善待&rdquo;那咒诅、凌辱我们的人，借贷&ldquo;不指望偿还&rdquo;。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">在论及人际关系的教导中，耶稣要求的是超越世人的爱，不但要善待仇敌，甚至要为仇敌祷告，慷慨的施舍，满有恩慈的饶恕；接下去，耶稣以一连串的比喻和格言教导门徒要有良善的品格，门徒的言行就是生命的流露，真诚的门徒不但心口合一，并且身体力行，他们的生命若有根基立在盘石上的房子才能坚固无比</span><span lang="ZH-CN"><span>（<span class="popup-link" @click = "popUp('pop2')"> 路6:39-49</span></span></span></span></span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">。</span><span><span><span lang="ZH-CN"><span> </span></span></span></span></p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<h3>责人之心责己</h3>

<p><sup class="versenum">39&nbsp;</sup>耶稣又用比喻对他们说：&ldquo;瞎子岂能领瞎子？两个人不是都要掉在坑里吗？<sup class="versenum">40&nbsp;</sup>学生不能高过先生，凡学成了的不过和先生一样。<sup class="versenum">41&nbsp;</sup>为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？<sup class="versenum">42&nbsp;</sup>你不见自己眼中有梁木，怎能对你弟兄说&lsquo;容我去掉你眼中的刺&rsquo;呢？你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。</p>

<h3>两种果树</h3>

<p><sup class="versenum">43&nbsp;</sup>&ldquo;因为没有好树结坏果子，也没有坏树结好果子。<sup class="versenum">44&nbsp;</sup>凡树木看果子就可以认出它来。人不是从荆棘上摘无花果，也不是从蒺藜里摘葡萄。<sup class="versenum">45&nbsp;</sup>善人从他心里所存的善就发出善来，恶人从他心里所存的恶就发出恶来；因为心里所充满的，口里就说出来。</p>

<p><sup class="versenum">46&nbsp;</sup>&ldquo;你们为什么称呼我&lsquo;主啊，主啊&rsquo;，却不遵我的话行呢？<sup class="versenum">47&nbsp;</sup>凡到我这里来，听见我的话就去行的，我要告诉你们他像什么人。<sup class="versenum">48&nbsp;</sup>他像一个人盖房子，深深地挖地，把根基安在磐石上，到发大水的时候，水冲那房子，房子总不能摇动，因为根基立在磐石上。<sup class="versenum">49&nbsp;</sup>唯有听见不去行的，就像一个人在土地上盖房子，没有根基，水一冲，随即倒塌了，并且那房子坏得很大。&rdquo;</p>
<!-- end bible --></div>

<p><span lang="ZH-CN">耶稣在山野的平原上结束了有关天国伦理的教导，随即进入了迦百农，继续祂在人群中间公开的服事。</span></p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音7:1-10》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音7:1-10</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣对百姓讲完了这一切的话，就进了迦百农。<sup>2</sup>有一个百夫长所宝贵的仆人，害病快要死了。<sup>3</sup>百夫长风闻耶稣的事，就托犹太人的几个长老去求耶稣来救他的仆人。<sup>4</sup>他们到了耶稣那里，就切切地求他说：&ldquo;你给他行这事是他所配得的，<sup>5</sup>因为他爱我们的百姓，给我们建造会堂。&rdquo;<sup>6</sup>耶稣就和他们同去。离那家不远，百夫长托几个朋友去见耶稣，对他说：&ldquo;主啊，不要劳动，因你到我舍下，我不敢当！<sup>7</sup>我也自以为不配去见你，只要你说一句话，我的仆人就必好了。<sup>8</sup>因为我在人的权下，也有兵在我以下，对这个说：&lsquo;去！&rsquo;他就去；对那个说：&lsquo;来！&rsquo;他就来；对我的仆人说：&lsquo;你做这事！&rsquo;他就去做。&rdquo;</p>

<p><sup>9</sup>耶稣听见这话，就希奇他，转身对跟随的众人说：&ldquo;我告诉你们，这么大的信心，就是在以色列中，我也没有遇见过。&rdquo;<sup>10</sup>那托来的人回到百夫长家里，看见仆人已经好了。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/229.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音7:1-10&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ 平行经文</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">这段叙述的平行经文在<span class="popup-link" @click = "popUp('pop3')"> 马太福音8:5-13</span>，

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>耶稣进了迦百农，有一个百夫长进前来，求他说：<sup class="versenum">6&nbsp;</sup>&ldquo;主啊，我的仆人害瘫痪病，躺在家里甚是疼苦。&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣说：&ldquo;我去医治他。&rdquo;<sup class="versenum">8&nbsp;</sup>百夫长回答说：&ldquo;主啊，你到我舍下我不敢当，只要你说一句话，我的仆人就必好了。<sup class="versenum">9&nbsp;</sup>因为我在人的权下，也有兵在我以下，对这个说&lsquo;去！&rsquo;他就去，对那个说&lsquo;来！&rsquo;他就来，对我的仆人说&lsquo;你做这事！&rsquo;他就去做。&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣听见就稀奇，对跟从的人说：&ldquo;我实在告诉你们：这么大的信心，就是在以色列中我也没有遇见过！<sup class="versenum">11&nbsp;</sup>我又告诉你们：从东从西，将有许多人来，在天国里与<u class="person underline">亚伯拉罕</u>、<u class="person underline">以撒</u>、<u class="person underline">雅各</u>一同坐席；<sup class="versenum">12&nbsp;</sup>唯有本国的子民，竟被赶到外边黑暗里去，在那里必要哀哭切齿了。&rdquo;<sup class="versenum">13&nbsp;</sup>耶稣对百夫长说：&ldquo;你回去吧！照你的信心给你成全了。&rdquo;那时，他的仆人就好了。</p>
	<!-- end bible --></div>
	该处描写耶稣直接和百夫长对话，学者对两段经文差异性的解释是，被委托人所说的话等同委托人，而马太也习惯用更简洁的手法来叙述事件。这位百夫长有可能是一位&ldquo;敬畏上帝的人&rdquo;，对犹太教感到兴趣，与犹太人一起在会堂敬拜上帝。百夫长对耶稣的信心是相信耶稣有医治的能力，并非真的认识耶稣的身分。这个神迹的重点不在耶稣的医治，而在百夫长的信心，并且暗示了犹太人和外邦人在基督里的合一，以及外邦被接纳进入神的国度。（引自：http://ocochome.info）</li>
</ul>

</div>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣教完门徒，就回到迦百农。一个罗马军方的百夫长，手下有一百人。这位罗马军长对生病的仆人表现出不凡的爱和怜悯，就派人去求耶稣来救他。百夫长的工作是维持秩序、执行法律，并确认人民缴税。耶稣使用百夫长来教导那些参与事工的领袖。他们学到真正的领袖：爱他所领导的人。存谦卑领导，知道自己不配得荣耀。靠信心领导，相信看不见的上帝，而不是眼所能见的。不忘记自己在权柄以下，对所照管的人民要向上交帐。耶稣对这百夫长的信心感到希奇。</p>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop4')"> 马太福音8:5-13</span>）&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">5&nbsp;</sup>耶稣进了迦百农，有一个百夫长进前来，求他说：<sup class="versenum">6&nbsp;</sup>&ldquo;主啊，我的仆人害瘫痪病，躺在家里甚是疼苦。&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣说：&ldquo;我去医治他。&rdquo;<sup class="versenum">8&nbsp;</sup>百夫长回答说：&ldquo;主啊，你到我舍下我不敢当，只要你说一句话，我的仆人就必好了。<sup class="versenum">9&nbsp;</sup>因为我在人的权下，也有兵在我以下，对这个说&lsquo;去！&rsquo;他就去，对那个说&lsquo;来！&rsquo;他就来，对我的仆人说&lsquo;你做这事！&rsquo;他就去做。&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣听见就稀奇，对跟从的人说：&ldquo;我实在告诉你们：这么大的信心，就是在以色列中我也没有遇见过！<sup class="versenum">11&nbsp;</sup>我又告诉你们：从东从西，将有许多人来，在天国里与<u class="person underline">亚伯拉罕</u>、<u class="person underline">以撒</u>、<u class="person underline">雅各</u>一同坐席；<sup class="versenum">12&nbsp;</sup>唯有本国的子民，竟被赶到外边黑暗里去，在那里必要哀哭切齿了。&rdquo;<sup class="versenum">13&nbsp;</sup>耶稣对百夫长说：&ldquo;你回去吧！照你的信心给你成全了。&rdquo;那时，他的仆人就好了。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">路7:9</p>

<p class="forward bible">耶稣听见这话，就希奇他，转身对跟随的众人说：&ldquo;我告诉你们，这么大的信心，就是在以色列中，我也没有遇见过。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">连主耶稣都稀奇百夫长有这么大的信心；这是何等难能可贵的事！这对我们有什么宝贵的启示？</li>
	<li class="forward">几位长老说这位百夫长是&ldquo;配得&rdquo;帮助的（4节）；但百夫长却说自己&ldquo;不配&rdquo;去见耶稣；从这一点，你学习到什么功课？</li>
	<li class="forward">当你见到一个慕道友比你更有信心时，你会有什么感想？从经文中可看出百夫长拥有美好名声的原因是什么？对你有什么提醒吗？你在不信主的家人和朋友之间有好的名声吗？</li>
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
	<li class="forward">求神监察你的内心，在待人处事上，是否有神儿子的性情，真实从心里爱和尊敬身边的人，无论他（们）的地位高低或是卑贱。未来一周，竭力向身边的人行一件善事。</li>
	<li class="forward">神是监察人心的主，当你在做任何事情或与人相处的事上，要知道在我们之上有一位神，有一天众人都要在神的面前向祂交账。所以，求主记念并亲自报答你爱人和愿做的心，并加倍祝福你行善的能力。</li>
	<li class="forward">为你认识的慕道亲友祷告，求神让他们亲自遇见祂，心被恩感，回转归向神。</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">统管宇宙万有的主，</span><span lang="ZH-CN">祢配得一切的称颂与赞美。</span><span lang="ZH-CN">感谢</span><span lang="ZH-CN">祢，俯就卑微并怜恤有需要的人。从</span><span lang="ZH-CN">百夫长的生命中，让我们学习作一个真正的领袖，必须爱他所领导的人；并存谦卑的心和靠信心来领导，因为知道自己不配得荣耀，所做的是做给看不见的天父看和得天父的称许。我们知道自己也是在权柄以下，对所照管的人有一天都要向主一一交帐。求主帮助我们在神在人面前凡事尽忠，荣神益人。感恩祷告是奉主名求，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->