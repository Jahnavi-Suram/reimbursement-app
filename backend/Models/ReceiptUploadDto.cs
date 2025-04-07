using Microsoft.AspNetCore.Http;

namespace backend.Models
{
    public class ReceiptUploadDto
    {
        public DateTime PurchaseDate { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
        public IFormFile ReceiptFile { get; set; } = null!;
    }
}
