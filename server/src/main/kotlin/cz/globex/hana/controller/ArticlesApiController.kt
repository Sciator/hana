package cz.globex.hana.controller

import cz.globex.hana.controller.util.*
import cz.globex.hana.core.dao.*
import org.springframework.http.*

interface ArticlesApiController {
	companion object {
		const val PATH: String = ApiController.PATH + "/articles"
	}

	fun retrieveArticles(): ResponseEntity<ArticlesRetrieveResponseDto>

	fun createArticle(req: ArticleCreateRequestDto): ResponseEntity<CreateResponseDto>

	fun retrieveArticle(id: Int): ResponseEntity<ArticleRetrieveResponseDto>
}

@CommonInterface
data class ArticlesRetrieveResponseDto(
	val articles: List<ArticleDto>
)

@CommonInterface
data class ArticleCreateRequestDto(
	val article: ArticleDto
)

@CommonInterface
data class ArticleRetrieveResponseDto(
	val article: ArticleDto
)