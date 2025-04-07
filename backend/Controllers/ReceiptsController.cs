using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReceiptsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ReceiptsController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitReceipt([FromForm] ReceiptUploadDto dto)
        {
            var uploadsFolder = Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads");
            Directory.CreateDirectory(uploadsFolder);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.ReceiptFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = System.IO.File.Create(filePath))
            {
                await dto.ReceiptFile.CopyToAsync(stream);
            }

            var receipt = new Receipt
            {
                PurchaseDate = dto.PurchaseDate,
                Amount = dto.Amount,
                Description = dto.Description,
                FilePath = "/uploads/" + fileName
            };

            _context.Receipts.Add(receipt);
            await _context.SaveChangesAsync();

            return Ok(receipt);
        }
    }
}
