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
                        <div class="chapter_number ltr"><h1>21.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《宣教士：阿德希》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
<h2>阿德希(Mary Ann Aldersey) 1797~1868</h2>

<p class="forward">第一位来华基督教女宣教士。在浙江宁波创办了 中国近代第一所女子学校&ldquo;宁波女塾 &rdquo;。 阿德希于 1797年6月24日出生在英国伦敦近郊哈克尼（Hackney）的一个富裕的家庭，父亲是文具批发商。其父母原是英国国教会（Church of England ，圣公会）的基督徒，后来改入史密斯牧师所主持的公理宗教会（Congregational Church）。当1824年第一位入华宣教士马礼逊（Robert Morrison）回英国休假时，就住在哈克尼，並参加史密斯的教会的各种聚会。阿德希就是在这一时期认识马礼逊的。马礼逊于1825年初，开设了一个中文班，阿德希就是他所招收的学生之一。她很早就立志要去中国宣教，但一方面因为父亲的阻拦，另一方面因其兄长丧偶，她必须要担负起照顾七个侄儿姪女的责任。虽然暂时不得脱身，但她在英国却一直关心着亚洲妇女的教育权利。她曾奉献大笔金钱给宣教差会，用以支持女宣教士前往亚洲，最后终于献上她自己。</p>

<p class="forward">1837年8月1 0日，阿德希搭乘轮船离开英国，以独立宣教士的身份，启程前往爪哇大城苏拉巴雅（Soura baya），因为当时女性宣教士还很难进入中国。同年12月2日，当她抵达巴达维亚（Batavia，今雅加达）时，正是她父母的结婚纪念日。在当日写给父母的信中，她如此表达了自己献身中国宣教的决心：&ldquo;我到这里并处身于中国人之中的这一天，也是我结婚的日子，长久以来我已许配给一个深深吸引我的民族。&rdquo; 那时，她已经4 0岁了。</p>

<p class="forward">到达苏拉巴雅後，阿德希一面复习中文，一面开始学习马来文，同时以讲道、派发福音书册、教育和医疗等多种方式从事宣教活动。期间她曾经历被人抢劫，被穆斯林恐吓等许多艰难，但她毫不退缩，不懈地努力。四年后，终有一位名叫杨邦基（Yang Pang - Ke）的华人在她的带领下归信基督。</p>

<p class="forward">1842年7月，阿德希抵达澳门，不久转往香港，等待进入中国的机会。她很想找到一个合适的地点设立女子学校，后经征询马礼逊的儿子马儒翰并接受他的建议，决定将办学的地点选在浙江宁波。1844年下半年，阿德希到达宁波，多年入华宣教的心愿终于实现了。</p>

<p class="forward">宁波是鸦片战争后开放的五个通商口岸之一，当时已有好几个基督教差会的多位宣教士在那里建立起宣教站、教堂、医院和学校等。阿德希是唯一的单身女性宣教士，且不隶属于任何基督教宗派和团体。 此后15年她以大部分时间从事女子教育事业，她兴办的女子寄宿学校是基督教会在中国建立的最早的近代女学，为宁波地区初期女子教育培育出需要的师资。在从事女子教育的同时，她还经常带领她的学生们走家串户，向宁波妇女传福音，並邀请她们到自己家里作客，听她讲道。</p>

<p class="forward">阿德希初到宁波后，在城外江边租到一个木屋，于 1844 年底开办了一所女子寄宿学校（Boarding School for Girls），称&ldquo;宁波女塾&rdquo;。起初最让她头痛的是学生的来源问题，因为当时很少有人愿意把女孩子送来读书，而且往往有父母是为了减轻家庭负担而把家中有病或愚钝的女儿送来。直到过了一段时间后，愿意送女儿来读书者增多，也有些社会地位较高的家庭开始把女孩子送来了。这所女学开办后第一年（1845年），学生人数只有15人；第二年增加到23人；第四年就增加到46人。此后都维持在45-50人之间。</p>

<p class="forward">阿德希女子学校开设的科目包括中文、宁波方言拼音字、英文、算术、地理、唱歌，以及缝纫、刺绣、纺纱、织布等女功技能。在学习传统中文之前，阿德希叫学生们先学美国宣教士丁韪良所创的拼音法，此法可使中国人在短时间内提高阅读能力。</p>

<p class="forward">阿德希非常注重学生的基督教信仰问题，她每天主持早祷和晚祷，每礼拜日请美国长老会的宣教士到校主持礼拜，或于周间前来举行各种聚会，并帮助年龄大一些的女学生组织读经班。到1854年年底时，已有7名学生受洗。为了使那些业满离校的学生继续保持信仰，阿德希一面鼓励她们经常回校见面，选摘一些经文送给她们；一面时常组织她们一起出去传福音。</p>

<p class="forward">由于当时中国社会普遍的排外心理，且有许多关于西教士对女孩子剖心挖眼等传闻，阿德希的住所屡次遭人扔石头，当地的官绅也多次 找茬与她为难，甚至她的学生也为社会所不容，但阿德希初衷不改，顶着难以想像的压力和困难，把女学办下去。</p>

<p class="forward">阿德希早年从马礼逊学中文时就与戴德生的岳父戴尔（Samuel Dyer）相熟。1853年，戴尔的两个女儿卜瑞拉（Burella）和玛丽亚（Maria）来到宁波，成为阿德希的得力助手。因为两姐妹父母早亡，阿德希就成为她们的保护人。她们在女学义务性任教将近五年后，相继因结婚而辞职离校。当妹妹玛丽亚与戴德生交往而要结婚时，却遭到阿德希的极力反对。后来，这一对有情人终成眷属，而阿德希却因阻挠他们的婚姻而背上了恶名（这实际对她并不公平）。</p>

<p class="forward">在阿德希女学中，还有一位特殊的教师，就是华人盲女爱尼丝（Agnes）。她原是流落广州街头的乞丐，后由德国宣教士郭实腊 （Karl Friedrich August Gutzlaff）的妻子收留，并送去英国&ldquo;伦敦盲人阅读学习协会&rdquo;（London Society for Teaching the Blind to Read ）读书。1856年，爱尼丝随中国宣道会宣教士祝恩赐（John Jones）来到宁波，阿德希将她安排的自己的学校学习中文，同时为她招收盲人学生由其教导。尽管盲生人数只有两名，但毕竟是开了中国盲人教育之先河。</p>

<p class="forward">1858年初，因经费等原因，加之阿德希已届60岁，经与美国长老会多年会商后，阿德希将其女学移交并入美国长老会的女学。本来长 老会建议以她的名字作为合并后女学的校名，但被她婉拒了，于是命名为&ldquo;崇德女校&rdquo;。1923年，该校与美国浸礼会开设的江北滨江对楼女校合并，定名为&ldquo;甬江女子中学&rdquo;。</p>

<p class="forward">阿德希在华最后三年期间，分别在宁波附近和山北地区，建立起三个宣教站，直接向当地百姓传福音；同时还开办日间走读学校（Day School）。 1859年9月，63岁的阿德希将三个宣教站分别移交给英国聖公会宣道会和美国长老会，从而结束了她在华15年宣的教工作。最后于1860年初离开中国，移居澳洲阿德雷德（Adelaide）与其侄儿女同住，直到1868年9月30日辞世，享年72岁。</p>

<p class="forward">《华人基督教史人物辞典》</p>

<p class="forward">http://www.bdcconline.net/zh-hans/stories/by-person/a/a-dexi.php</p>



<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->