<template>
  <div>
    <div class="container my-4">
      <div class="row my-3">
        <div class="col-md-12 my-2">Click on servers to know the details</div>
        <div class="col-md-6 border border-primary">
          <ul v-for="(server,index) in servers" :key="server.id">
            <server-info :serverProp="server" :ind="index"></server-info>
          </ul>
        </div>
        <div class="col-md-6 border border-success">
          <servers></servers>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import serverdetail from "./multiServer.vue";
import serversComp from "./server.vue";
export default {
  data() {
    return {
      servers: [
        { id: "1", status: "Normal" },
        { id: "2", status: "Critical" },
        { id: "3", status: "Bad Server" },
        { id: "4", status: "Unknown" },
        { id: "5", status: "Normal" },
      ],
    };
  },
  components: {
    servers: serverdetail,
    serverInfo: serversComp,
  },
};
</script>