<template>
  <div class="datastatus">
    <div class="title">
      <i v-bind:class="icon"></i>
      {{title}}
    </div>
    <table class="tablelist">
      <tr>
        <td colspan="2" style="text-align: left; border-bottom: 1px dashed;">【プロセス状態】</td>
      </tr>
      <tr>
        <td>
          <table>
            <tr class="borderbottom">
              <td>プロセス</td>
              <td>電文</td>
              <td>ON/OFF</td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr class="borderbottom">
              <td>プロセス</td>
              <td>電文</td>
              <td>ON/OFF</td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
            <tr class="borderbottom">
              <td>SysMsg</td>
              <td>0</td>
              <td>
                <i class="fas fa-toggle-on"></i>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataStatusComponent",
  props: {
    icon: String,
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datastatus {
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
}
.title {
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
}
.tablelist {
  width: 100%;
  background-color: white;
}
i {
  padding: 5px;
}
table {
  background-color: white;
  width: 90%;
}
.borderbottom > td {
  text-align: center;
  border-bottom: 1px dashed;
}
</style>
