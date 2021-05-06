const menu = () => {
  let mun = "";
  let comida = "";
  let dep = "";

  if (dep !== null) {
    dep = dep.toLowerCase();
    if (
      dep != "bo" &&
      dep != "an" &&
      dep != "cu" &&
      dep != "sa" &&
      dep != "at"
    ) {
      console.log("seleccione un departamento");
    } else {
      if (dep == "bo") {
        mun = prompt(
          "Seleccione un municipio de Bolivar \n ca - cartagena \n el - el carmen de bolivar \n tu - turbaco \n sa - san juan nepomuceno"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "ca" && dep != "el" && dep != "tu" && dep != "sa") {
            console.log("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt(
                "Seleccione una comida tipica de cartagena \n ae - arroz con embutido de mi tierra  \n ca - chipirones y almejas en fritada  \n ac - arroz caribe  "
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ae" && comida != "ca" && comida != "ac") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "ae") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/12461935-arroz-con-embutido-de-mi-tierra-cartagena"
                    );
                  }
                  if (comida == "ca") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/5967322-chipirones-y-almejas-en-fritada-con-vino-dorado-de-cartagena"
                    );
                  }
                  if (comida == "ac") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13860338-arroz-caribe-cartagena-de-la-casa"
                    );
                    //alert("La receta es: \n");
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n pr - papa rellena \n ch - chupe de pollo \n pa - papilla de verdura"
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "pr" && comida != "ch" && comida != "pa") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "pr") {
                  }
                  if (comida == "ch") {
                  }
                  if (comida == "pa") {
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "an") {
        mun = prompt(
          "Seleccione un municipio de Antioquia \n me - medellin  \n sf - santa fe \n je - jericó \n ja - jardin"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "" && dep != "" && dep != "" && dep != "") {
            console.log("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt("Seleccione una comida tipica de  \n  \n \n");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "cu") {
        mun = prompt(
          "Seleccione un municipio de Cundinamarca \n bg - bogota  \n so - soacha \n gi - girardot \n zi - zipaquirá"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "ca" && dep != "el" && dep != "tu" && dep != "sa") {
            console.log("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt(
                "Seleccione una comida tipica de cartagena \n ae - arroz con embutido de mi tierra  \n ca - chipirones y almejas en fritada  \n ac - arroz caribe  "
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ae" && comida != "ca" && comida != "ac") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "sa") {
        mun = prompt(
          "Seleccione un municipio de Santander \n bu - bucaramanga \n ba - barrancabermeja \n pe - el peñon \n sa - sabana de torres"
        );
        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "ca" && dep != "el" && dep != "tu" && dep != "sa") {
            console.log("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt(
                "Seleccione una comida tipica de cartagena \n ae - arroz con embutido de mi tierra  \n ca - chipirones y almejas en fritada  \n ac - arroz caribe  "
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ae" && comida != "ca" && comida != "ac") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "at") {
        mun = prompt(
          "Seleccione un municipio del Atlantico \n ba - barranquilla \n so - soledad \n ba - baranoa  \n ma - malambo"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "ca" && dep != "el" && dep != "tu" && dep != "sa") {
            console.log("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt(
                "Seleccione una comida tipica de cartagena \n ae - arroz con embutido de mi tierra  \n ca - chipirones y almejas en fritada  \n ac - arroz caribe  "
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ae" && comida != "ca" && comida != "ac") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n  \n  \n "
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  console.log("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
    }
  } else {
    console.log("no seleccionaste una ciudad");
  }
};
