<template>
  <div>
    <el-table
            ref="table"
            border
            :fit="fit"
            :stripe="stripe"
            :data="tableData"
            :empty-text="emptyText"
            highlight-current-row
            @select="multiselect"
            @selection-change="onSelectionChange"
            @current-change="onCurrentChange">
            <slot name="columns"></slot>
        </el-table>
        <div v-if="pagination" class="Pagination" style="text-align: left;margin-top: 10px;">
            <el-pagination v-if="reload"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-sizes="pageSizes"
                           :page-size="limit"
                           layout="total, -> ,sizes, -> , prev, pager, next"
                           :total="count">
            </el-pagination>
        </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    props: {
      /* 列宽是否自撑开 */
      fit: {
        type: Boolean,
        default: true,
        required: false
      },
      /* 是否显示斑马纹 */
      stripe: {
        type: Boolean,
        default: true,
        required: false
      },
      /* 是否分页，默认分页 */
      pagination: {
        type: Boolean,
        default: true,
        required: false
      },
      /* 分页数量选项 */
      pageSizes: {
        type: Array,
        default: function() {
          return [5, 10, 15, 50, 100];
        },
        required: false
      },
      /* 查询Api,方法 */
      searchApi: {
        type: Function,
        required: true
      },
      /* 查询参数 */
      params: {
        type: Object,
        default() {
          return {};
        },
        required: false
      }
    }
  },
  data() {
    return {
      reload: true,
      tableData: [],
      currentRow: null,
      offset: 0,
      limit: 15,
      count: 0,
      currentPage: 1,
      emptyText: "暂无数据",
      selection: null,
      multipleSelect: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      try {
        this.getApiData();
      } catch (err) {
        this.$message.error("获取数据失败");
      }
    },
    /* 页码数量变化 */
    handleSizeChange(val) {
      this.currentPage = 1;
      this.limit = val;
      this.getApiData();
    },
    /* 当前页变化事件 */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getApiData();
    },
    /* 行选中事件 */
    onCurrentChange(selection) {
      this.selection = selection;
    },
    /* 当选择项变化时触发 */
    onSelectionChange(selection) {
      this.selection = selection;
    },
    /* 多选项变化触发事件 */
    multiselect(selections) {
      this.multipleSelect = selections;
    },
    /* 获取多选选中 */
    getMultiselect() {
      return this.multipleSelect;
    },
    /* 获取单选选中 */
    getSelection() {
      return this.selection;
    },
    /* 返回当前表格装载数据 */
    getTableData() {
      return this.tableData;
    },
    /* 获取数据 */
    async getApiData() {
      var params = this.params;
      params.skipCount = (this.currentPage - 1) * this.limit;
      params.maxResultCount = this.limit;
      this.emptyText = "加载中。。。";
      this.tableData = [];
      this.reload = false;
      const result = await this.searchApi(params);
      this.tableData =
        (result &&
          result.result &&
          (result.result.rows || result.result.items)) ||
        [];
      this.count =
        (result &&
          result.result &&
          (result.result.total || result.result.totalCount)) ||
        0;
      this.emptyText = "暂无数据";
      this.reload = true;
    },
    /* 参数搜索全部数据 */
    async searchApiData() {
      var params = this.params;
      params.skipCount = 0;
      params.maxResultCount = this.limit;
      this.emptyText = "加载中。。。";
      this.tableData = [];
      this.reload = false;
      const result = await this.searchApi(params);
      this.tableData =
        (result &&
          result.result &&
          (result.result.rows || result.result.items)) ||
        [];
      this.count =
        (result &&
          result.result &&
          (result.result.total || result.result.totalCount)) ||
        0;
      this.emptyText = "暂无数据";
      this.reload = true;
    },
    /*  支持单条删除、单页批量删除，不支持多页批量删除  */
    setCurrentPage(deleteCount) {
      var curPage = this.currentPage; // 当前页
      var totalPage = Math.ceil(this.count / this.limit) || 1; // 总页数
      if (curPage < totalPage) {
        // 不在最后一页操作
        this.currentPage = curPage;
      } else {
        var newTotalPage =
          Math.ceil((this.count - deleteCount) / this.limit) || 1; // 删除后的总页数
        if (newTotalPage <= totalPage) {
          this.currentPage = newTotalPage;
        }
      }
    },
    /* 查询 */
    search(params) {
      /* 参数 */
      for (var i in params) {
        this.params[i] = params[i];
      }
      this.searchApiData();
    },
    /* 取消选中 */
    clearSelection() {
      this.$refs.table.clearSelection();
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
