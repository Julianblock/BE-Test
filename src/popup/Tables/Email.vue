<template>
<div>
    <div style="display: flex;align-items: center; justify-content: center; cursor: pointer;" @click="homeHref">
      <img alt="Focust Logo" src="@/assets/logo.png" class="home-img">
      <h1 style="color: grey;">Email</h1>
    </div>
   <p class="table-back" @click="setEmailFalse"> &#8592; </p>
  <div class="table-w">
    <div class="table">
      <table>
        <tr>
          <th>
            Email
          </th>
          <th>
            Block Emails
          </th>
          <th>
            Mute Emails
          </th>
          <th>
            Mute Notifications
          </th>
          <th>
            Mute Emails marked Important
          </th>
        </tr>
        <tr>
          <td>
            <p>
            jblock@Jblocktech.com
            </p>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <p>
            julian.block@slickdeals.net
            </p>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" >
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <p>
            julian.personal@gmail.com
            </p>
          </td>
          <td>
            <label class="container">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <label class="container">
              <input type="checkbox" checked="checked">
              <span class="checkmark"></span>
            </label>
          </td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods: {
        setEmailFalse() {
            this.$store.commit('set', {
               email: false,
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  width: 100%;
  border: none;
  box-shadow: 0px 0px 3px grey;
  color: grey;
  width: 100%;

  table {
    width: 100%;
  }

  tr {
    border-bottom: solid 1px #ccc;
    height: 80px;
    display: flex;
    align-items: center;
  }

  td, th {
    height: 33px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 130px;
    }
  }

  &-w {
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 450px;
  }

}

.table-back {
    color: #0ece9e;
    margin-left: 20px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 62px;
    cursor: pointer;
    transition: 0.4s;

    &-hover {
        text-shadow: 0px 0px 2px grey;
    }
}

/* The container */
.container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  transition: .4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  transition: .4s;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  height: 25px;
  width: 25px;
  margin-top: 3px;
  background-color: #eee;
  transition: .4s;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
  transition: .4s;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #0ece9e;
  transition: .4s;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>