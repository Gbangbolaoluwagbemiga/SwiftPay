;; SwiftPay NFT - Represents ownership of a payment stream
(impl-trait .nft-trait.nft-trait)
(define-non-fungible-token swift-pay-stream uint)
(define-constant CONTRACT-OWNER tx-sender)
(define-data-var last-id uint u0)
