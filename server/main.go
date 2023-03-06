package main

import (
	"os"
	"server/routes"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"net/http"
)

type FizzbuzzRequestBody struct {
	Count int
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	router.Use(cors.Default())

	router.POST("/user/create", routes.AddUser)
	router.GET("/users", routes.GetUsers)
	router.GET("/user/:id/", routes.GetUserById)
	router.PUT("/user/update/:id", routes.UpdateUser)
	router.DELETE("/user/delete/:id", routes.DeleteUser)

	router.POST("/fizzbuzz", func(c *gin.Context) {
		var requestBody FizzbuzzRequestBody

		if err := c.BindJSON(&requestBody); err != nil {
			response := gin.H{"status": http.StatusBadRequest, "error": err.Error()}
			c.JSON(http.StatusBadRequest, response)
			return
		}
		
		result := ""
		
		if requestBody.Count % 3 == 0 && requestBody.Count % 5 == 0 {
			result = os.Getenv("FIZZBUZZ")
		} else if requestBody.Count % 3 == 0 {
			result = os.Getenv("FIZZ")
		} else if requestBody.Count % 5 == 0 {
			result = os.Getenv("BUZZ")
		}

		c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "result": result})
	})

	router.Run(":" + port)
}