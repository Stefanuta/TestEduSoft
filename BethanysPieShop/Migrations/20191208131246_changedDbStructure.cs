using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BethanysPieShop.Migrations
{
    public partial class changedDbStructure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pies");

            migrationBuilder.AddColumn<int>(
                name: "UserInfoId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "UserInfo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(nullable: true),
                    Points = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInfo", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserInfoId",
                table: "AspNetUsers",
                column: "UserInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserInfo_UserInfoId",
                table: "AspNetUsers",
                column: "UserInfoId",
                principalTable: "UserInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserInfo_UserInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "UserInfo");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserInfoId",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "Pies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ImageThumbnailUrl = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    IsInStock = table.Column<bool>(nullable: false),
                    IsPieOfTheWeek = table.Column<bool>(nullable: false),
                    IsSweet = table.Column<bool>(nullable: false),
                    LongDescription = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    ShortDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pies", x => x.Id);
                });
        }
    }
}
