package cz.globex.hana.core

import cz.globex.hana.core.dao.*
import cz.globex.hana.core.dao.impl.*
import org.springframework.context.annotation.*
import org.springframework.stereotype.*

@Component
class DaoProvider internal constructor(
	@Lazy private val _adsDao: AdsDaoImpl,
	@Lazy private val _eventsDao: EventsDaoImpl,
	@Lazy private val _stockExchangesDao: StockExchangesDaoImpl,
	@Lazy private val _usersDao: UsersDaoImpl,
) {
	val adsDao: AdsDao get() = _adsDao
	val eventsDao: EventsDao get() = _eventsDao
	val stockExchangesDao: StockExchangesDao get() = _stockExchangesDao
	val usersDao: UsersDao get() = _usersDao
}