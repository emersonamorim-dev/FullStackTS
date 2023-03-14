﻿// <auto-generated />
using System;
using BackendTS.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BackendTS.Migrations
{
    [DbContext(typeof(FullStackDbContext))]
    [Migration("20220828155007_Initial Migration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("FullStackAPI.models.Pessoa", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("nome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("cpf")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estado")
                        .HasColumnType("nvarchar(max)");


                    b.HasKey("id");

                    b.ToTable("Pessoas");
                });


            modelBuilder.Entity("FullStackAPI.models.Automovel", b =>
            {
                b.Property<Guid>("id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("uniqueidentifier");

                b.Property<string>("placa")
                    .HasColumnType("nvarchar(max)");

                b.Property<string>("veiculo")
                    .HasColumnType("nvarchar(max)");

                b.HasKey("id");

                b.ToTable("Automovel");
            });
#pragma warning restore 612, 618
        }
    }
}
