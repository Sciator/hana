package cz.globex.hana.database.entity

import cz.globex.hana.core.dto.AdType

import java.net.*
import java.time.*
import javax.persistence.*

@Suppress("ProtectedInFinal")
@Entity
data class Ad protected constructor(
    @Column(nullable = false)
    var authorId: Int,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var description: String,

    @ManyToOne()
    var place: Place?,

    @Column(nullable = true)
    var photoUri: String?,

    @ManyToMany
    var tags: Set<Tag>?,

    @Column(nullable = true)
    var isActual: Boolean,

    @Column(nullable = true)
    var payout: Int,

    @Enumerated(EnumType.STRING)
    var type: AdType,
) {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    val id: Int = 0

    @Column(nullable = false)
    var created: String = ""

    companion object {
        fun newInstance(
            authorId: Int,
            name: String,
            description: String,
            place: Place?,
            photoUri: String?,
            tags: Set<Tag>?,
            isActual: Boolean,
            payout: Int,
            type: AdType,
        ): Ad {
            val trimmedName = name.trim()
            val trimmedDescription = description.trim()

            if (trimmedName.isEmpty()) throw IllegalArgumentException()
			
            return Ad(authorId, trimmedName, trimmedDescription, place, photoUri, tags, 
                isActual, payout, type)
        }
    }

    protected constructor() : this(0, "", "", null, null, null, false, 0, AdType.SUPPLY)
}
