<template>
  <div class="list-wrap">
    <table class="users-list fixed_header">
      <thead>
        <UserListHeader
          v-bind:user="listTitles"
          class="list-title"
          v-on:sotrList="toSotrList"
        />
      </thead>
      <tbody>
        <ListItem
          v-for="user of usersList"
          v-bind:user="user"
          v-bind:key="user.id"
        />
      </tbody>
    </table>
    <Loader v-if="isDataLoading" class="loading" />
  </div>
</template>

<script>
import Loader from "@/components//loader";
import ListItem from "@/components/ListItem";
import UserListHeader from "@/components/UserListHeader";
import axios from "axios";

export default {
  components: {
    ListItem,
    UserListHeader,
    Loader
  },
  methods: {
    toSotrList(type) {
      this.sortParameters.actualSortBy = type;
      if (type === this.sortParameters.actualSortBy) {
        this.sortParameters.reversSort = !this.sortParameters.reversSort;
      } else {
        this.sortParameters.reversSort = false;
      }
      this.getDataFromServer(
        this.sortParameters.actualSortBy,
        this.sortParameters.reversSort
      );
    },
    getDataFromServer(sorter, isRevers) {
      this.isDataLoading = true;
      let newData = [];
      axios
        .get("http://localhost:3000/users")
        .then(response => (newData = response.data))
        .then(() => {
          if (sorter && !isRevers) {
            this.usersList = newData.sort((a, b) => b[sorter] - a[sorter]);
          } else if (sorter && isRevers) {
            this.usersList = newData.sort((a, b) => a[sorter] - b[sorter]);
          } else {
            this.usersList = newData;
          }
        })
        .then(() => {
          this.isDataLoading = false;
        })
        .catch(err => console.log("ERROE:", err));
    }
  },
  data() {
    return {
      isDataLoading: false,
      sortParameters: {
        actualSortBy: null,
        reversSort: false
      },
      usersList: null,
      listTitles: {
        id: "id",
        first_name: "firs name",
        last_name: "last name",
        email: "email",
        phone: "phone",
        quiz_id: "quiz id",
        time: "time",
        result: "result",
        created_at: "created at"
      }
    };
  },
  mounted() {
    this.getDataFromServer();
  }
};
</script>

<style>
.list-wrap {
  margin: 0 auto;
  width: 80vw;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.fixed_header {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.fixed_header tbody {
  display: block;
  width: 100%;
  overflow-y: auto;
  height: 500px;
}
.fixed_header thead tr {
  display: flex;
  width: calc(100% - 16px);
  height: 65px;
}
.fixed_header tbody tr {
  display: flex;
  width: 100%;
}
.users-list {
  table-layout: fixed;
  font-family: "Work Sans", sans-serif;
  border-collapse: collapse;
  color: #191919;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.48);
  border-radius: 10px;
}
.users-list .list-title {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.48);
  border-bottom: 3px solid #4a4a4a;
}
.users-list tr th {
  font-weight: bold;
  padding: 20px 10px;
  text-align: left;
}
.users-list td,
.users-list th {
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.users-list td {
  border-bottom: 1px solid #e7e7e7;  
  height: 80px;
}
.users-list tr td:first-child,
.users-list tr th:first-child {
  width: 5%;
}
.users-list tr td:first-child {
  justify-content: center;
}
.users-list tr td:nth-child(2),
.users-list tr th:nth-child(2) {
  width: 8%;
}
.users-list tr td:nth-child(3),
.users-list tr th:nth-child(3) {
  width: 8%;
}
.users-list tr td:nth-child(4),
.users-list tr th:nth-child(4) {
  width: 22%;
}
.users-list tr td:nth-child(5),
.users-list tr th:nth-child(5) {
  width: 13%;
}
.users-list tr td:nth-child(6),
.users-list tr th:nth-child(6) {
  width: 10%;
}
.users-list tr td:nth-child(7),
.users-list tr th:nth-child(7) {
  width: 10%;
}
.users-list tr td:nth-child(8),
.users-list tr th:nth-child(8) {
  width: 9%;
}
.users-list tr td:nth-child(9) {
  width: calc(15% - 16px);
}
.users-list tr th:nth-child(9) {
  width: 15%;
}
</style>
